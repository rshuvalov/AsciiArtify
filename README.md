# Readme

```
kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d

docker build --build-arg VERSION=v1.0.0 --tag gcr.io/symmetric-ray-404110/demo:v1.0.1 .
docker run -d --name demo -p 0.0.0.0:3000:3000 demo:v1.0.0
```