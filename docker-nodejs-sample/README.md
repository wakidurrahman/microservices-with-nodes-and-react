# Node.js language-specific guide with sample Node.js application

The Node.js language-specific guide teaches you how to containerize a Node.js application using Docker. In this guide, you’ll learn how to:

-   Containerize and run a Node.js application
-   Set up a local environment to develop a Node.js application using containers
-   Run tests for a Node.js application using containers
-   Configure a CI/CD pipeline for a containerized Node.js application using GitHub Actions.
-   Deploy your containerized Node.js application locally to Kubernetes to test and debug your deployment

## Containerize a Node.js application.

Get the sample application

> `git clone https://github.com/docker/docker-nodejs-sample`

Test the application without Docker (optional)

> `$ npm install`

> `$ node src/index.js`

Initialize Docker assets

> `$ docker init`

You should now have the following contents in your `docker-nodejs-sample` directory.

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

Run the application

> `$ docker compose up --build`

Run the application in the background

> `$ docker compose up --build -d`

To stop the application

> `docker compose down`

## Use containers for Node.js development

How to set up a development environment for my containerized application.

- Adding a local database and persisting data
- Configuring my container to run a development environment
- Debugging my containerized application

Add a local database and persist data

> You can use containers to set up local services, like a database. To define a database service and a volume to persist data.

After adding db directory.

```
├── docker-nodejs-sample/
│ ├── db/
│ │ └── password.txt
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

- Configure and run a development container

You can use a bind mount to mount your source code into the container. The container can then see the changes you make to the code immediately, as soon as you save a file. This means that you can run processes, like nodemon, in the container that watch for filesystem changes and respond to them. 

- Update your Dockerfile for development

Rather than creating one Dockerfile for production, and another Dockerfile for development, you can use one multi-stage Dockerfile for both.