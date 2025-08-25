import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    'cleanArchitectureGenerator.generateFeature',
    async (uri: vscode.Uri) => {
      if (!uri || !uri.fsPath) {
        vscode.window.showErrorMessage('Please select a folder by right-clicking.');
        return;
      }

      const selectedPath = uri.fsPath;

      const featureName = await vscode.window.showInputBox({
        prompt: 'Enter the feature name (e.g., authentication, user_profile)',
        placeHolder: 'Feature name',
        validateInput: (value: string) => {
          if (!value || value.trim().length === 0) {
            return 'Feature name is required';
          }
          if (!/^[a-zA-Z][a-zA-Z0-9_]*$/.test(value)) {
            return 'Feature name must start with a letter and contain only letters, numbers, and underscores';
          }
          return null;
        }
      });

      if (!featureName) {
        vscode.window.showErrorMessage('Feature name is required.');
        return;
      }

      const featureRoot = path.join(selectedPath, featureName.toLowerCase());

      const dirs = [
        'application/providers',
        'application/use_cases',
        'data/data_sources/local',
        'data/data_sources/remote',
        'data/dtos',
        'data/mappers',
        'data/repositories',
        'domain/entities',
        'domain/repositories',
        'presentation/screens',
        'presentation/views',
        'presentation/widgets',
        'presentation/layouts',
      ];

      for (const dir of dirs) {
        const fullPath = path.join(featureRoot, dir);
        fs.mkdirSync(fullPath, { recursive: true });

        // Crear archivo base
        const leaf = dir.split('/').pop()!;
        const fileName = `${leaf}.dart`;
        const filePath = path.join(fullPath, fileName);
        if (!fs.existsSync(filePath)) {
          fs.writeFileSync(filePath, `// TODO: Implement ${leaf}`);
        }
      }

      // Generar archivos de barril en todos los niveles
      generateLayerBarrelFiles(featureRoot);

      // Archivo de barril del feature completo
      generateFeatureBarrel(featureRoot);

      vscode.window.showInformationMessage(`✅ Feature "${featureName}" successfully generated at ${featureRoot}`);
    }
  );

  context.subscriptions.push(disposable);
}

function generateLayerBarrelFiles(currentPath: string) {
  const items = fs.readdirSync(currentPath);

  for (const item of items) {
    const itemPath = path.join(currentPath, item);
    const isDir = fs.statSync(itemPath).isDirectory();

    if (isDir) {
      // Recursividad primero para los subniveles
      generateLayerBarrelFiles(itemPath);
    }
  }

  // Generar barril actual (solo si es carpeta)
  if (fs.statSync(currentPath).isDirectory()) {
    generateBarrelFile(currentPath);
  }
}

function generateBarrelFile(folderPath: string) {
  const items = fs.readdirSync(folderPath);
  const exports: string[] = [];

  for (const item of items) {
    const fullPath = path.join(folderPath, item);
    if (fs.statSync(fullPath).isDirectory()) {
      // Espera archivo de barril en subcarpeta
      exports.push(`export '${item}/${item}.dart';`);
    } else if (
      item.endsWith('.dart') &&
      item !== `${path.basename(folderPath)}.dart`
    ) {
      exports.push(`export '${item}';`);
    }
  }

  if (exports.length > 0) {
    const barrelPath = path.join(folderPath, `${path.basename(folderPath)}.dart`);
    fs.writeFileSync(barrelPath, exports.join('\n'));
  }
}

function generateFeatureBarrel(featureRoot: string) {
  const layers = ['application', 'data', 'domain', 'presentation'];
  const exports = layers.map(layer => `export '${layer}/${layer}.dart';`).join('\n');
  const barrelPath = path.join(featureRoot, `${path.basename(featureRoot)}.dart`);
  fs.writeFileSync(barrelPath, exports);
}

export function deactivate() {}