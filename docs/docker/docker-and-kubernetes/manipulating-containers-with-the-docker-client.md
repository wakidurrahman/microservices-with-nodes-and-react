# Section 2: Manipulating Containers with the Docker Client

1. docker run `<image name>`

> `$ docker run hello-world`

2. docker run `<image name>` `<command>`

> `$ docker run busybox`

> `$ docker run busybox echo hi there`

> `$ docker run busybox ls`

3. docker  ps

> `$ docker ps`

> `$ docker ps --all`

4. docker run `<image name>`

`docker run` = `docker create` + `docker start`

> `$ docker create hello-world`

> `docker start <the-container-id>`

> `docker start -a <the-container-id>`


5. docker system prune

> `$ docker system prune`


6. docker stop | kill | rm -f

> `docker stop <the-container-id>`

> `docker kill <the-container-id>`

> `docker rm <the-container-id>`

> `docker rm -f <the-container-id>`


7. docker exec -it `<the-container-id>` `<command>`

> `docker exec -it <the-container-id> sh`

