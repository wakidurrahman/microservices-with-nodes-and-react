# Section 3: Building Custom Images Through Docker Server

Creating docker image 

`Dockerfile`
=> `Docker client`
=> `Docker server`
=> `Usable Image!`

Creating a Dockerfile

1. Specify a base image
2. Run some commands to install additional program
3. Specify a command to run on container startup

```
FROM alpine
RUN apk add -update redis
CMD ["redis-server"]
```

Tagging an image

`docker build -t <your docker id>/radis:latest .`