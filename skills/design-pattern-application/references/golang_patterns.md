# Golang Design Patterns

Golang has unique idiomatic patterns that leverage its concurrency model and interface system.

## 1. Functional Options Pattern
- **Problem**: Handling optional configuration parameters in constructors without many arguments or complex structs.
- **Solution**: Pass functions that modify a configuration struct.
- **Example**: `NewServer(WithPort(8080), WithTimeout(30s))`.

## 2. Factory / Constructor Pattern
- **Problem**: Go doesn't have classes, but needs consistent object creation.
- **Solution**: Use functions starting with `New` (e.g., `func NewClient() *Client`).

## 3. Concurrency Patterns
### Fan-in / Fan-out
- **Fan-out**: Launching multiple goroutines to handle tasks from a single channel.
- **Fan-in**: Combining multiple channels into one.
- **Use Case**: Parallel processing of high-volume data.

### Worker Pool
- **Problem**: Limiting the number of concurrent goroutines.
- **Solution**: A fixed number of workers reading from a job channel.

### Generator
- **Problem**: Producing a sequence of values lazily.
- **Solution**: A function returning a read-only channel.

## 4. Error Handling Patterns
- **Problem**: Consistent error propagation.
- **Solution**: Returning errors as the last return value. Use `errors.Is` and `errors.As` for checking specific error types.

## 5. Interface Segregation (Go-style)
- **Problem**: Large interfaces make mocking and implementation difficult.
- **Solution**: Keep interfaces small (often just 1 or 2 methods like `io.Reader`, `io.Writer`). Compose them as needed.
