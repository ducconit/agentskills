# Design Pattern Trade-off Matrix

This guide helps you choose the right pattern by evaluating common trade-offs.

| Pattern | Benefit | Cost (Trade-off) | Best When... |
| :--- | :--- | :--- | :--- |
| **Singleton** | Global access, controlled instance. | Difficult to test, hidden dependencies. | You need exactly one instance (e.g., Log). |
| **Strategy** | Swappable algorithms, avoids conditionals. | Increased number of classes. | Logic changes based on context or user. |
| **Decorator** | Flexible extension, avoids subclassing. | Small objects clutter, complex construction. | You need to add behavior at runtime. |
| **Observer** | Loose coupling between subject/observers. | Order of notifications is unpredictable. | Multiple objects react to one event. |
| **State** | Clean state transitions, avoids long switches. | Can be overkill for simple states. | Behavior is heavily dependent on state. |
| **Factory** | Decouples client from concrete classes. | Adds an abstraction layer. | Object types are unknown until runtime. |
| **Builder** | Fine-grained control over construction. | Requires a separate builder class. | Objects have many optional parameters. |
| **Adapter** | Reuses existing code with new interfaces. | Adds a small performance overhead. | Third-party code doesn't match your system. |
| **Facade** | Simplifies complex subsystem usage. | Can become a "God object" if not careful. | You need a clean API for a messy system. |
| **Command** | Decouples sender and receiver, supports Undo. | Each command requires a new class. | You need to queue or undo operations. |

## Selection Heuristics

1. **Does the logic change frequently?** -> Consider **Strategy** or **State**.
2. **Is the construction complex?** -> Consider **Builder** or **Factory**.
3. **Are there many dependents?** -> Consider **Observer**.
4. **Is the interface wrong?** -> Consider **Adapter**.
5. **Need to add behavior?** -> Consider **Decorator** (runtime) or **Template Method** (compile time).
