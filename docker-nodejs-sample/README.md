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


## Run Node.js tests in a container

In this guide you take a look at running your unit tests in Docker when developing and when building.

> `docker build -t node-docker-image-test --progress=plain --no-cache --target test .`



## Configure CI/CD for your Node.js application

how to set up and use GitHub Actions to build and test your Docker image as well as push it to Docker Hub. You will complete the following steps:

1. Create a new repository on GitHub.
2. Define the GitHub Actions workflow.
3. Run the workflow.

***Step 1: Create the repository***

1. Create a new repository on GitHub.
2. Open the repository `Settings`, and go to `Secrets and variables` > `Actions`.
3. Create a new secret named `DOCKER_USERNAME` and your Docker ID as value.
4. Create a new Personal Access Token (PAT) for Docker Hub. You can name this token node-docker.
5. Add the PAT as a second secret in your GitHub repository, with the name `DOCKERHUB_TOKEN`.
6. Push your code to the repository you just created.


***Step 2: Set up the workflow***

Set up your GitHub Actions workflow for 
 > Building, 
 
 > Testing, 
 
 > Pushing the image to Docker Hub.

1. Go to your repository on GitHub and then select the `Actions` tab.

2. Select set `up a workflow yourself`. This takes you to a page for creating a new GitHub actions workflow file in your repository, under `.github/workflows/main.yml` by default.

3. In the editor window, copy and paste the following YAML configuration.

```
name: ci

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      -
        name: Checkout
        uses: actions/checkout@v4
      -
        name: Login to Docker Hub
        uses: docker/login-action@v3
        with:
          username: ${{ secrets.DOCKER_USERNAME }}
          password: ${{ secrets.DOCKERHUB_TOKEN }}
      -
        name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v3
      -
        name: Build and test
        uses: docker/build-push-action@v5
        with:
          context: .
          target: test
          load: true
      -
        name: Build and push
        uses: docker/build-push-action@v5
        with:
          context: .
          push: true
          target: prod
          tags: ${{ secrets.DOCKER_USERNAME }}/${{ github.event.repository.name }}:latest
```

***Step 3: Run the workflow***

Save the workflow file and run the job.

1. Select Commit changes... and push the changes to the main branch. After pushing the commit, the workflow starts automatically.

2. Go to the Actions tab. It displays the workflow. Selecting the workflow shows you the breakdown of all the steps.

3. When the workflow is complete, go to your repositories on Docker Hub. If you see the new repository in that list, it means the GitHub Actions successfully pushed the image to Docker Hub.