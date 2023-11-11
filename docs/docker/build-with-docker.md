# Build with Docker

1. Overview
2. Introduction 
3. Layers 
4. Multi-stage
5. Mounts
6. Build arguments
7. Export binaries
8. Test
9. Multi-platform
10. Next steps

## 1. Overview

Build with Docker

This guide is an introduction and deep-dive into building software with Docker.

**Topics covered in this guide include:**

- Introduction to build concepts
- Image size optimization
- Build speed performance improvements
- Building and exporting binaries
- Cache mounts and bind mounts
- Software testing
- Multi-platform builds


## 2. Introduction.

From this starting point, the guide illustrates various ways that you can improve how you build the application with Docker.


The application

```
├── docker-nodejs-sample/
│ ├── spec/
│ ├── src/
│ ├── .dockerignore
│ ├── .gitignore
│ ├── compose.yaml
│ ├── Dockerfile
│ ├── package-lock.json
│ ├── package.json
│ └── README.md
```


The Dockerfile

A Dockerfile is a text document in which you define the build steps for your application. You write the Dockerfile in a domain-specific language, called the Dockerfile syntax.

Here's the Dockerfile used as the starting point for this guide:
```
# syntax=docker/dockerfile:1

FROM node:18-alpine
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
CMD ["node", "src/index.js"]
EXPOSE 3000
```

Here’s what this Dockerfile does:

1. `# syntax=docker/dockerfile:1` : This comment is a Dockerfile parser directive. It specifies which version of the Dockerfile syntax to use. This file uses the dockerfile:1 syntax which is best practice: it ensures that you have access to the latest Docker build features.

2. `FROM node:18-alpine`: The `FROM` instruction uses version `18-alpine` of the `node` official image.
3. `WORKDIR /src`: Creates the `/src` working directory inside the container.
4. `COPY . .` : Copies the files in the build context to the working directory in the container.
5. `RUN npm install`: Downloads the necessary `npm` modules to the container.
6. `CMD ["node", "src/index.js"]`: Specifies a command to run when the container starts. Starts the server process.


## 3. Layers.

The order of Dockerfile instructions matters. A Docker build consists of a series of ordered build instructions. Each instruction in a Dockerfile roughly translates to an image layer. The following diagram illustrates how a Dockerfile translates into a stack of layers in a container image.

![Layers](../images/layers.png)


## 4. Multi-stage

There are two main reasons for why you’d want to use multi-stage builds:

- They allow you to run build steps in parallel, making your build pipeline faster and more efficient.
- They allow you to create a final image with a smaller footprint, containing only what's needed to run your program.

Add stages

```
# syntax=docker/dockerfile:1
FROM golang:1.21-alpine
WORKDIR /src
COPY go.mod go.sum .
RUN go mod download
COPY . .
RUN go build -o /bin/client ./cmd/client
RUN go build -o /bin/server ./cmd/server

FROM scratch
COPY --from=0 /bin/client /bin/server /bin/
ENTRYPOINT [ "/bin/server" ]

```

Parallelism

You can do that by assigning a name to the stage using the pattern `FROM image AS stage_name. `

This allows you to reference the stage name in a FROM instruction of another stage (FROM stage_name).

```
FROM node:18.10.0-alpine as base
...
...

FROM base as dev 
```

Build targets


## 4. Mounts