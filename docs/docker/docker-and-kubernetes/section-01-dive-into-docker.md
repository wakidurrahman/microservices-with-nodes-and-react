# Section 1: Drive Into Docker!

> Why use Docker?

Answer: Docker makes it really easy to install and run software without worrying about setup or dependencies.

> What is Docker?

Docker: is a platform or ecosystem around creating and running containers.

Image: An image is a single file containing all the dependencies and all the configuration required to run a very specific program.

Container: A container is an instance of an image runs a program. 


Docker client (Docker CLI): Tool that we are going to issue commands to 
Docker Server (Docker Daemon): Tool that is responsible for creating images, running containers, etc.

What is a container?

A container is a sandboxed process running on a host machine that is isolated from all other processes running on that host machine. That isolation leverages kernel namespaces and cgroups, features that have been in Linux for a long time. Docker makes these capabilities approachable and easy to use. To summarize, a container:

- Is a runnable instance of an image. You can create, start, stop, move, or delete a container using the Docker API or CLI.
- Can be run on local machines, virtual machines, or deployed to the cloud.
- Is portable (and can be run on any OS).
- Is isolated from other containers and runs its own software, binaries, configurations, etc.

What is an image?

A running container uses an isolated filesystem. This isolated filesystem is provided by an image, and the image must contain everything needed to run an application - all dependencies, configurations, scripts, binaries, etc. The image also contains other configurations for the container, such as environment variables, a default command to run, and other metadata.


$ docker run hello-world 
$ docker image hello-world
$ docker inspect hello-world
$ docker history hello-world

