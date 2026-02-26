# Breaking Changes

How to identify and document breaking changes in your commits.

## 1. Identification
A breaking change is a change that breaks backward compatibility. Examples:
- Renaming a public API method.
- Removing a supported feature.
- Changing the required parameters of a function.
- Changing the return type of a public function.

## 2. Declaration
Breaking changes MUST be declared in the commit message. There are two ways:

### The `!` Indicator
Place a `!` before the colon in the commit header.
- **Example**: `feat(api)!: remove deprecated endpoints`
- **Example**: `chore!: drop support for Node 12`

### The `BREAKING CHANGE:` Footer
Add a footer at the very end of the commit message.
- **Format**: `BREAKING CHANGE: <description>`
- **Example**:
  ```text
  refactor(auth): simplify login flow

  The login endpoint no longer accepts plain text passwords.

  BREAKING CHANGE: The 'password' field now requires a hashed string.
  ```

## 3. Semantic Versioning Impact
A breaking change MUST trigger a **MAJOR** version bump.
- **Version 1.2.3** -> **2.0.0**
