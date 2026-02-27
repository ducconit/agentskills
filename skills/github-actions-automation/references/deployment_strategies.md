# Deployment Strategies with GitHub Actions

Patterns for deploying applications to various environments.

## 1. Rolling Update
- **Description**: Gradually replaces old instances with new ones.
- **Tools**: Kubernetes (default), AWS ECS.
- **GHA Implementation**: Update image tag in k8s manifest and apply.

## 2. Blue-Green Deployment
- **Description**: Two identical environments (Blue for live, Green for new). Traffic is switched after verification.
- **Tools**: AWS Route53, Nginx.
- **GHA Implementation**: Deploy to idle environment -> Run Smoke Tests -> Switch Traffic.

## 3. Canary Deployment
- **Description**: New version is deployed to a small percentage of users first.
- **Tools**: Istio, ArgoCD, AWS App Mesh.
- **GHA Implementation**: Use `wait-for-deployment` and monitoring metrics to decide whether to roll out to 100%.

## 4. GitHub Environments
- **Protection Rules**: Require manual approval for production deployments.
- **Environment Secrets**: Use different secrets for `staging` and `production`.
- **Deployment Status**: Track history and status in the GitHub repository's "Deployments" tab.
