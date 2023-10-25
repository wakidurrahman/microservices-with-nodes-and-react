# [Get started](https://docs.docker.com/get-started/)

## Part 1: Overview of the get started guide

- **What is a container?** A container is a sandboxed process running on a host machine that is isolated from all other processes running on that host machine.

- **What is an image?** A running container uses an isolated filesystem. This isolated filesystem is provided by an image, and the image must contain everything needed to run an application - all dependencies, configurations, scripts, binaries, etc.

---

## Part 2: Containerize an application

**Prerequisites**

- Docker Desktop.
- Git client. (git/github)
- Visual Studio Code.

Get the app

```
├── getting-started-docker-app/
│ ├── package.json
│ ├── README.md
│ ├── spec/
│ ├── src/
│ └── yarn.lock
```
Build the app's image

> In the `getting-started-docker-app` directory, the same location as the `package.json` file, create a file named `Dockerfile`. You can use the following commands to create a `Dockerfile` based on your operating system.

```
# syntax=docker/dockerfile:1

FROM node:18-alpine
WORKDIR /app
COPY . .
RUN yarn install --production
CMD ["node", "src/index.js"]
EXPOSE 3000
```
---
` docker build -t getting-started-docker-app . `

> - `-t` (flag tags your image)

> - `.` (The `.` at the end of the docker build command tells Docker that it should look for the Dockerfile in the current directory)


---

`$  docker run -dp 127.0.0.1:3000:3000 getting-started-docker-app `

> - `-d` : The `-d` flag (short for --detach) runs the container in the background.

> - `-p` :  The `-p` flag (short for --publish) creates a port mapping between the host and the container. 
    The -p flag takes a string value in the format of `HOST:CONTAINER`, where `HOST` is the address on the host, and `CONTAINER` is the port on the container. 
    The command publishes the container's port 3000 to `127.0.0.1:3000` (`localhost:3000`) on the host. Without the port mapping, you wouldn't be able to access the application from the host.

---

## Part 3: Update the application

**Update the source code**

1. In the `src/static/js/app.js` file, update line 56 to use the new empty text.

```
- <p className="text-center">No items yet! Add one above!</p>
+ <p className="text-center">You have no todo items yet! Add one above!</p>
```

2. Build your updated version of the image, using the `docker build` command.

```
docker build -t getting-started-docker-app .
```

3. Start a new container using the updated code.

```docker run -dp 127.0.0.1:3000:3000 getting-started-docker-app
```
You probably saw an error like this:
```
docker: Error response from daemon: driver failed programming external connectivity on endpoint laughing_burnell 
(bb242b2ca4d67eba76e79474fb36bb5125708ebdabd7f45c8eaf16caaabde9dd): Bind for 127.0.0.1:3000 failed: port is already allocated.
```

**Remove the old container**

> To remove a container, you first need to stop it. Once it has stopped, you can remove it. You can remove the old container using the CLI or Docker Desktop's graphical interface. Choose the option that you're most comfortable with.
1. Get the ID of the container by using the `docker ps` command.

> $ docker stop` < the-container-id> `Use the docker stop command to stop the container.

> $ docker rm `< the-container-id>` Once the container has stopped, you can remove it by using the docker rm command.

> $ You can stop and remove a container in a single command by adding the force flag to the docker rm command. For example: `docker rm -f <the-container-id>`

**Start the updated app container**

1. Now, start your updated app using the docker run command.

> `$ docker run -dp 127.0.0.1:3000:3000 getting-started-docker-app`

2. Refresh your browser on `http://localhost:3000 `and you should see your updated help text.

---

### Part 4: Share the application