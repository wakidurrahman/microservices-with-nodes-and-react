# Auth service 

## Route

1. `api/user/singup`
2. `api/user/singin`
3. `api/user/singout`
4. `api/user/currentuser`

## Method

1. `POST`
2. `POST`
3. `POST`
4. `GET`

## Body
1. `{ email: string, password: string }`
2. `{ email: string, password: string }`
3. `{}`
4. `-` 

## Purpose

1. Sing up for an account
2. Sing in to an existing accout
3. Sign out
4. Return info about the user


# Dockerfile

```
FROM node:alpine

WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY ./ ./

CMD [ "npm", "run", "start" ]
```

# .dockerignore

```
node_modules
package-lock.json
```

# Kubernetes Deployment, Service
```
auth-deploy.yaml

apiVersion: apps/v1
kind: Deployment
metadata:
  name: auth-deploy
spec:
  replicas: 1
  ...
---
apiVersion: v1
kind: Service
metadata:
  name: auth-clusterip-service
spec:
  selector:
    app: auth
```

# Ingress

```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: ingress-service
  annotations:
    kubernetes.io/ingress.class: nginx
    nginx.ingress.kubernetes.io/use-regex: "true"
spec:
  rules:
    - host: stubhub-ticketing.dev
```

# Skaffold
```
apiVersion: skaffold/v4beta6
kind: Config
...
```