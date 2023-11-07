# Node.js language-specific guide with sample Node.js application

The Node.js language-specific guide teaches you how to containerize a Node.js application using Docker. In this guide, you’ll learn how to: 

- Containerize and run a Node.js application
- Set up a local environment to develop a Node.js application using containers
- Run tests for a Node.js application using containers
- Configure a CI/CD pipeline for a containerized Node.js application using GitHub Actions.
- Deploy your containerized Node.js application locally to Kubernetes to test and debug your deployment

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

