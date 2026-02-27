# GitHub Actions Workflow Syntax

Essential reference for designing and configuring GitHub Actions.

## 1. Triggers (Events)
- **Push/Pull Request**: `push: { branches: [main] }`, `pull_request: { types: [opened, synchronize] }`.
- **Scheduled**: `schedule: [{ cron: '0 0 * * *' }]`.
- **Manual**: `workflow_dispatch: { inputs: { ... } }`.
- **External**: `repository_dispatch`.

## 2. Jobs Configuration
- **Runner**: `runs-on: ubuntu-latest | windows-latest | macos-latest`.
- **Dependencies**: `needs: [job_id]`.
- **Conditional**: `if: github.event_name == 'push'`.
- **Strategy (Matrix)**:
  ```yaml
  strategy:
    matrix:
      node-version: [14.x, 16.x, 18.x]
  ```

## 3. Steps and Actions
- **Run Commands**: `run: npm install && npm test`.
- **Use Marketplace Actions**: `uses: actions/checkout@v3`.
- **Environment Variables**: `env: { KEY: VALUE }`.
- **Secrets**: `secrets: { TOKEN: ${{ secrets.GITHUB_TOKEN }} }`.

## 4. Reusable Workflows
- **Call**: `uses: owner/repo/.github/workflows/reusable.yml@v1`.
- **Input/Output**: Define `inputs` and `outputs` in the reusable workflow.
