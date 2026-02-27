# Behavioral Design Patterns

Behavioral patterns focus on object interaction, communication, and responsibility distribution within a system.

## 1. Chain of Responsibility
- **Problem**: Passing requests along a chain of handlers.
- **Use Case**: HTTP middleware (Auth, Logging, Validation), UI event bubbling.
- **Indicators**: `setNext()` method, a recursive call to `next->handle()`.

## 2. Command
- **Problem**: Encapsulating a request as an object, allowing for parameterization and queuing.
- **Use Case**: Undo/Redo systems, task scheduling, macro recording.
- **Indicators**: `execute()` and `undo()` methods.

## 3. Iterator
- **Problem**: Traversing a collection without exposing its underlying representation.
- **Use Case**: Iterating over custom tree structures, linked lists.
- **Indicators**: `hasNext()` and `next()` methods.

## 4. Mediator
- **Problem**: Reducing direct dependencies between objects by making them communicate via a mediator.
- **Use Case**: UI forms (components communicating via form state), chat applications.
- **Indicators**: A central class that manages communication between multiple colleagues.

## 5. Memento
- **Problem**: Capturing and restoring an object's internal state without violating encapsulation.
- **Use Case**: Save/Restore game states, text editor history.
- **Indicators**: `saveState()` and `restoreState()` methods.

## 6. Observer
- **Problem**: Notifying multiple objects about state changes in another object.
- **Use Case**: Event listeners, data binding (MVVM/MVC), Pub/Sub systems.
- **Indicators**: `subscribe()`, `unsubscribe()`, and `notify()` methods.

## 7. State
- **Problem**: Allowing an object to alter its behavior when its internal state changes.
- **Use Case**: Document status (Draft, Review, Published), Vending machines, Game characters.
- **Indicators**: A context class that delegates its behavior to a state object.

## 8. Strategy
- **Problem**: Defining a family of algorithms and making them interchangeable.
- **Use Case**: Sorting algorithms, payment methods, discount calculations.
- **Indicators**: Context class receiving a strategy object in its constructor or a method.

## 9. Template Method
- **Problem**: Defining the skeleton of an algorithm in a superclass but letting subclasses override specific steps.
- **Use Case**: Report generation (header, body, footer), database migrations.
- **Indicators**: A final/non-virtual base method calling protected abstract "hook" methods.

## 10. Visitor
- **Problem**: Adding new operations to existing object structures without modifying them.
- **Use Case**: Compilers (traversing an AST to generate code), export tools.
- **Indicators**: `accept(visitor)` in elements and `visit(element)` in visitors.
