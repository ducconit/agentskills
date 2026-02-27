# Examples

Standard and complex commit message examples for reference.

## 1. Basic Commits
- **feat**: `feat(parser): add support for YAML 1.2`
- **fix**: `fix(api): handle null response from external provider`
- **docs**: `docs: add installation steps to README`
- **style**: `style: fix indentation in config files`

## 2. Commits with Body and Footer
- **refactor**:
  ```text
  refactor(auth): simplify login logic

  Split the login function into smaller, testable units.
  
  Refs: #123
  ```

## 3. Breaking Changes
- **feat!**:
  ```text
  feat(api)!: remove deprecated endpoints

  The old /v1/auth endpoint is no longer supported.

  BREAKING CHANGE: The /v1/auth endpoint has been removed. Use /v2/auth instead.
  ```

## 4. Multiple Footers
- **fix**:
  ```text
  fix(ui): fix overflow on mobile devices

  Correct the flexbox properties to ensure content fits within the screen.

  Reviewed-by: @jane-doe
  Refs: #456, #789
  ```
