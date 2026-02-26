# GitHub Actions Best Practices

Guidelines for building secure, efficient, and maintainable pipelines.

## 1. Security First
- **Principle of Least Privilege**: Use the `permissions` key in workflows to limit `GITHUB_TOKEN` scope.
- **Secrets Management**: Never log secrets. Use `secrets.*` and mask them.
- **Pin Actions**: Use commit SHA instead of tags for third-party actions to prevent supply chain attacks (e.g., `uses: actions/checkout@8e5e7e5...`).

## 2. Performance Optimization
- **Caching**: Use `actions/cache` for node_modules, maven, pip, etc.
- **Artifacts**: Use `actions/upload-artifact` and `download-artifact` to share data between jobs.
- **Selective Execution**: Use `paths` filter to run workflows only when specific files change.
  ```yaml
  on:
    push:
      paths:
        - 'src/**'
  ```

## 3. Reliability
- **Timeouts**: Set `timeout-minutes` to prevent hung jobs from consuming minutes.
- **Concurrency**: Use `concurrency` groups to cancel in-progress runs on the same branch.
- **Retry Logic**: Use `nick-fields/retry` for flaky network calls.

## 4. Maintainability
- **Composite Actions**: Bundle multiple steps into a single reusable action.
- **Clear Naming**: Use descriptive names for jobs and steps.
- **Environment Variables**: Use `env` at the appropriate level (workflow, job, or step).
