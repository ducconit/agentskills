# Creational Design Patterns

Creational patterns provide various object creation mechanisms, which increase flexibility and reuse of existing code.

## 1. Singleton
- **Problem**: Ensuring a class has only one instance and providing a global point of access to it.
- **Use Case**: Database connections, shared configurations, logging services.
- **Indicators**: Private constructor, static instance variable, `getInstance()` method.

## 2. Factory Method
- **Problem**: Creating objects without specifying the exact class to be created.
- **Use Case**: Document readers (PDF, Word), UI elements (Buttons for different OS).
- **Indicators**: Creator class with a virtual `createProduct()` method.

## 3. Abstract Factory
- **Problem**: Creating families of related objects without specifying their concrete classes.
- **Use Case**: Cross-platform UI toolkits (Windows, Mac, Linux themes).
- **Indicators**: An interface for creating a set of products.

## 4. Builder
- **Problem**: Constructing complex objects step by step.
- **Use Case**: SQL query builders, HTTP request builders, complex configurations.
- **Indicators**: Fluent interface (method chaining), `build()` method.

## 5. Prototype
- **Problem**: Creating new objects by copying an existing one.
- **Use Case**: Game entities with many similar properties, expensive object creation.
- **Indicators**: `clone()` method.
