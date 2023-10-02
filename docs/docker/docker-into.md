# Docker

## Why use Docker?

Docker makes it really easy to install and run software without worrying about setup or dependencies.

## What is Docker?

Docker: is a platform or ecosystem around creating and running containers.
==> Docker Ecosystem like below.

1. Docker Client.
2. Docker Server.
3. Docker Machine.
4. Docker Images.
5. Docker Hub.
6. Docker Compose.

==> Image: Single file with all the deps and config required to run a program.

==> Container: Instance of the Image. Runs a program.

## Docker for Windows/Mac

1. Docker Client(Docker CLI): Tool that we are going to issue commands to.
2. Docker Server(Docker Daemon): Tool that is responsible for creating images, running containers, etc.

A self-sufficient runtime for containers

Common Commands:

- docker run:  Create and run a new container from an image
- docker exec: Execute a command in a running container
- docker ps: List containers
- docker build: Build an image from a Dockerfile
- docker pull: Download an image from a registry
- docker push: Upload an image to a registry
- docker images: List images
- docker login: Log in to a registry
- docker logout: Log out from a registry
- docker search: Search Docker Hub for images
- docker version: Show the Docker version information
- docker info: Display system-wide information


few commands.
$ docker run hello-world
$ docker run busybox echo hi there


----------
$ docker create busybox
$ docker start imageId
$ docker start -a imageId
$ docker crate busybox ping google.com
$ docker logs imageId

------------
$ docker stop containerId
$ docker kill containerId


-------------
$ docker exec -it containerId sh
$ docker run -it busybox sh

---------------------
docker build -t wakidur/simpleweb .

docker run wakidur/simpleweb
docker run -p 8080:8080 wakidur/simpleweb
docker run -it wakid/todo sh


Docker Volumes: automatically get changes that we make to uour source code
----------------------------------------------------------
$ docker run -p 3000:3000 -v /app/node_modules -v $(pwd):/app <image_id>

