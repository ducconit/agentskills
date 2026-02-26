# JavaScript, React & Vue Design Patterns

Modern frontend development has evolved specific patterns for component composition and state management.

## 1. General JavaScript Patterns
- **Module Pattern**: Encapsulating private state and exposing public APIs using IIFEs or ES Modules.
- **Proxy Pattern**: Intercepting and customizing operations on objects (Core of Vue 3 reactivity).
- **Pub/Sub (Event Bus)**: Decoupled communication between components.

## 2. React Specific Patterns
- **Hooks Pattern**: Extracting stateful logic from components (e.g., `useState`, `useEffect`, Custom Hooks).
- **HOC (Higher-Order Components)**: Functions that take a component and return a new component with added logic.
- **Render Props**: Passing a function as a prop to share code between components.
- **Compound Components**: Components that work together to manage a shared state (e.g., `<Select>` and `<Option>`).
- **Container/Presenter Pattern**: Separating data fetching (logic) from UI (rendering).

## 3. Vue Specific Patterns
- **Composition API**: Organizing component logic by feature rather than lifecycle (Vue 3).
- **Provide / Inject**: Passing data down the component tree without prop drilling.
- **Slots (Scoped Slots)**: Flexible component templating, allowing children to access parent data.
- **Directives Pattern**: Encapsulating DOM manipulation logic (e.g., `v-custom-directive`).

## 4. State Management Patterns
- **Flux / Redux**: Unidirectional data flow (Actions -> Dispatcher -> Store -> View).
- **Atomic State**: Small, independent pieces of state (Recoil, Jotai).
- **Signal Pattern**: Granular reactivity tracking (SolidJS, Preact, Vue 3).
