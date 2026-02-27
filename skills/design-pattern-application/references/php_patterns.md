# PHP Design Patterns

Modern PHP (Laravel, Symfony) relies heavily on specific architectural patterns.

## 1. Active Record vs. Data Mapper
- **Active Record**: An object includes both data and database access logic (e.g., Laravel's Eloquent).
- **Data Mapper**: Separates the business logic from the database storage logic (e.g., Symfony's Doctrine).

## 2. Middleware Pattern
- **Problem**: Processing requests/responses in a pipeline (Auth, Logging, CSRF).
- **Indicators**: `handle($request, Closure $next)` method.
- **Use Case**: Web request filtering.

## 3. Dependency Injection & Service Container
- **Problem**: Managing dependencies in large applications.
- **Solution**: Centralized "Service Container" to bind and resolve objects.
- **Indicators**: Type-hinting in constructors or method injection.

## 4. Repository Pattern
- **Problem**: Decoupling business logic from data source (DB, Cache, External API).
- **Solution**: An abstraction layer between the domain and data mapping layers.

## 5. Facade Pattern (Laravel style)
- **Problem**: Providing static-like access to non-static methods in the service container.
- **Indicators**: Static calls like `Cache::get('key')` which resolve to a service instance.

## 6. Service Provider Pattern
- **Problem**: Bootstrapping and registering services in an application.
- **Solution**: Classes dedicated to registering bindings, listeners, and middleware.
