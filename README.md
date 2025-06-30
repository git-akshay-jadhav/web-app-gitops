# GitOps Web Application Demo

This repository demonstrates a complete GitOps workflow using Docker, Kubernetes, and ArgoCD.

## Architecture

- **Application**: Simple HTML/CSS/JS web app
- **Containerization**: Docker
- **Orchestration**: Kubernetes
- **GitOps**: ArgoCD
- **CI/CD**: GitHub Actions

## Quick Start

1. **Prerequisites**: Docker, kubectl, minikube, ArgoCD
2. **Deploy**: Apply ArgoCD application manifest
3. **Access**: Use service URL or port forwarding

## Features

- ✅ Automated CI/CD pipeline
- ✅ GitOps deployment with ArgoCD
- ✅ Container registry integration
- ✅ Kubernetes manifests
- ✅ Health checks and monitoring

## Server Details

- IP: 13.49.225.44
- Docker Hub: akshay1669/web-app-gitops

## Usage

```bash
# Build and run locally
docker build -t web-app .
docker run -p 8080:80 web-app

# Deploy to Kubernetes
kubectl apply -f k8s/

# Deploy with ArgoCD
kubectl apply -f argocd/application.yaml
```

## Monitoring

Access ArgoCD UI at `https://localhost:8080` to monitor deployments.
