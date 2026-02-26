# Types and Scopes

Guidelines for choosing the right type and scope for your commit.

## 1. Commit Types
- **feat**: A new feature (correlates with `MINOR` in Semantic Versioning).
- **fix**: A bug fix (correlates with `PATCH` in Semantic Versioning).
- **docs**: Documentation only changes.
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc).
- **refactor**: A code change that neither fixes a bug nor adds a feature.
- **perf**: A code change that improves performance.
- **test**: Adding missing tests or correcting existing tests.
- **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm).
- **ci**: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, GitHub Actions).
- **chore**: Other changes that don't modify src or test files.
- **revert**: Reverts a previous commit.

## 2. Scope Conventions
A scope is a noun describing a section of the codebase enclosed in parenthesis.
- **Examples**: `auth`, `api`, `parser`, `ui-button`, `database`.
- **Global Changes**: If the change affects the entire project, the scope can be omitted.
- **Multiple Scopes**: Try to pick the most relevant one, or omit it if it's too broad.
