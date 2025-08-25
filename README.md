# Samurai Clean Architecture Generator

🚀 A powerful Visual Studio Code extension that automatically generates Flutter features following Clean Architecture principles with a well-organized folder structure.

[![Version](https://img.shields.io/visual-studio-marketplace/v/sangheliosblack.samurai-clean-arch-generator)](https://marketplace.visualstudio.com/items?itemName=sangheliosblack.samurai-clean-arch-generator)
[![Downloads](https://img.shields.io/visual-studio-marketplace/d/sangheliosblack.samurai-clean-arch-generator)](https://marketplace.visualstudio.com/items?itemName=sangheliosblack.samurai-clean-arch-generator)
[![Rating](https://img.shields.io/visual-studio-marketplace/r/sangheliosblack.samurai-clean-arch-generator)](https://marketplace.visualstudio.com/items?itemName=sangheliosblack.samurai-clean-arch-generator)

## ✨ Features

✅ **Automatic Complete Structure Generation**  
✅ **Clean Architecture by Default**  
✅ **Automatic Barrel Files**  
✅ **Simple and Fast Interface**  
✅ **Context Menu Integration**  
✅ **Consistent Naming Convention**  
✅ **Zero Configuration Required**  

## 🚀 How to Use

1. **Right-click** on any folder in VS Code Explorer
2. Select **"Generate Feature (Clean Architecture)"**
3. Enter your feature name (e.g., "authentication", "user_profile")
4. **Done!** The complete structure is generated automatically

## 📁 Generated Structure

```
feature_name/
├── feature_name.dart                 # Main barrel file
├── application/
│   ├── application.dart              # Application layer barrel
│   ├── providers/
│   │   └── providers.dart            # State management providers
│   └── use_cases/
│       └── use_cases.dart            # Business logic use cases
├── data/
│   ├── data.dart                     # Data layer barrel
│   ├── data_sources/
│   │   ├── local/
│   │   │   └── local.dart            # Local data sources
│   │   ├── remote/
│   │   │   └── remote.dart           # Remote data sources (APIs)
│   │   └── data_sources.dart
│   ├── dtos/
│   │   └── dtos.dart                 # Data Transfer Objects
│   ├── mappers/
│   │   └── mappers.dart              # DTO to Entity mappers
│   └── repositories/
│       └── repositories.dart         # Repository implementations
├── domain/
│   ├── domain.dart                   # Domain layer barrel
│   ├── entities/
│   │   └── entities.dart             # Business entities
│   └── repositories/
│       └── repositories.dart         # Repository interfaces
└── presentation/
    ├── presentation.dart             # Presentation layer barrel
    ├── screens/
    │   └── screens.dart              # Main screens
    ├── views/
    │   └── views.dart                # View components
    ├── widgets/
    │   └── widgets.dart              # Reusable widgets
    └── layouts/
        └── layouts.dart              # Layout components
```

## 🏗️ Clean Architecture Layers

- **Domain Layer**: Contains business entities and repository interfaces
- **Data Layer**: Implements repositories, handles external data sources
- **Application Layer**: Contains use cases and state management
- **Presentation Layer**: UI components, screens, and widgets

## 📋 Requirements

- Visual Studio Code 1.100.0 or higher
- Flutter/Dart project (recommended)

## 🎯 Why Clean Architecture?

- **Separation of Concerns**: Each layer has a single responsibility
- **Testability**: Easy to unit test each layer independently
- **Maintainability**: Changes in one layer don't affect others
- **Scalability**: Easy to add new features following the same pattern
- **Independence**: Business logic is independent of frameworks and UI

## 🚀 Quick Start Example

After generating a feature called `authentication`:

1. Add your entities in `domain/entities/`
2. Define repository contracts in `domain/repositories/`
3. Implement repositories in `data/repositories/`
4. Create use cases in `application/use_cases/`
5. Build your UI in `presentation/screens/`

## 📝 Release Notes

### 0.0.1

- Initial release
- Automatic Clean Architecture structure generation
- Barrel file support
- Context menu integration
- Support for local and remote data sources
- Complete layer separation

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Julio Villagrana Martinez**
- Email: julio.villagrana.sanghelios2@gmail.com
- GitHub: [@SangheliosBlack](https://github.com/SangheliosBlack)

---

⭐ If you found this extension helpful, please give it a star!
