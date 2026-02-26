# Structural Design Patterns

Structural patterns explain how to assemble objects and classes into larger structures while keeping these structures flexible and efficient.

## 1. Adapter
- **Problem**: Incompatible interfaces that need to work together.
- **Use Case**: Integrating 3rd party libraries, legacy code migration.
- **Indicators**: A class that implements an interface and wraps an instance of another class.

## 2. Bridge
- **Problem**: Decoupling an abstraction from its implementation.
- **Use Case**: Rendering engines for different graphic APIs (OpenGL, DirectX).
- **Indicators**: Composition where the abstraction delegates to an implementation object.

## 3. Composite
- **Problem**: Treating individual objects and compositions of objects uniformly.
- **Use Case**: File systems (files and folders), UI trees (components and containers).
- **Indicators**: A tree structure where leaves and branches implement the same interface.

## 4. Decorator
- **Problem**: Adding responsibilities to objects dynamically without subclassing.
- **Use Case**: IO streams (buffered, encrypted, compressed), UI wrappers.
- **Indicators**: A class that takes the base component in its constructor and extends its behavior.

## 5. Facade
- **Problem**: Providing a simplified interface to a complex library or subsystem.
- **Use Case**: Video conversion libraries, complex payment gateways.
- **Indicators**: A single class coordinating multiple subsystem objects.

## 6. Flyweight
- **Problem**: Supporting large numbers of fine-grained objects efficiently by sharing common state.
- **Use Case**: Particle systems in games, text editors (sharing character formatting).
- **Indicators**: Separation of intrinsic (shared) and extrinsic (unique) state.

## 7. Proxy
- **Problem**: Providing a placeholder for another object to control access, logging, or caching.
- **Use Case**: Lazy loading (Virtual Proxy), Access control (Protection Proxy), Remote communication (Remote Proxy).
- **Indicators**: Proxy class implementing the same interface as the real subject.
