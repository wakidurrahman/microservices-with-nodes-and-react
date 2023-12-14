# Section 1: Quick Start!

This is about the three major innovations that started the Docker whole evolution of software in 2013, that is mainly three things.

- The Docker image, that
- Docker registry, and then the
- Docker container.

Most of us, when we think of Docker, we think of the container, but these three innovations go together like bread and butter and they call it at Docker build ship run.

CNCF or the (Cloud Native Computing Foundation)

just focusing on major features of Linux and now windows that are sort of adopting a lot of these Linux concepts.

=> Major Linux Features used by Docker.

- Namespaces
- CGroups
- Veth: or virtual Ethernet devices.
- IPTABLES: is like a firewall and general IP packet, routing and control
- Union Mount:, which is something that we use for getting the file system with all these layers in it, into the container at start to look like its own unique file system that's isolated from the rest of the host.

## why does Docker need to exist? Why Docker and why now?

And at the time it was created, there was friction. There was things in the way of us going to the next level of speed and ease of use of the software lifecycle, particularly around `packaging`, `distributing` and `running` all the software we're making.

So this main list of `Isolation`, `Environments` and `Speed`, those three areas are what I want to talk about as the three overall reasons.

I feel like the containers themselves had to exist and why they're so popular today.

### what containers do is they?

Give us the isolation, like a VM. It's not quite the same, but we'll just argue for now that it's an isolation layer, where they get their own `IP address`, they get their own `file system`, they get their own `process space`. And so it seems like almost a full VM, but you don't need all the `different operating systems` so we can reduce our `operating system` count. Our `physical host` count. You no longer have to use VMs as the layer of `isolation`.

# Section 2: Course Introduction

## Course Roadmap (Overview)

1. Getting Requirements
2. Docker Install
3. Container Basics
4. Image Basics
5. Docker Networking
6. Docker Volumes
7. Docker Compose
8. Orchestration
9. Docker Swarm
10. Kubernetes
11. Swarm vs. K8s
12. Student Q&A
13. File Reviews
14. References Galore

# Section 3: The Best Way to Setup Docker for Your OS

Docker Dasktop: Best local containers on Windows, Linux, and macOS.

Desktop, as the primary means for developers, operators, sysadmins, or anyone wanting to learn Docker That's how you should be learning Docker to begin with.

Docker Desktop, it is the best way for you to run the Docker tools,

\*\*\* we're going to learn Docker first.

Of all the ways to run containers, I like to classify them into three main types.

3 Major Ways to run containers

1. Locally (Docker Desktop, RD)
2. Server (Docker Engine, K8s)
3. Paas (Cloud Run, Fargate)

Recommendations for Extensions

1. Docker
2. Kubernetes
3. Remote Development
4. Live Share
