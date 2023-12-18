# Section 6: Persistent Data: Volumes, Volumes, Volumes

- $ `docker volume ls`
- $ `docker volume inspect <volume name>`
- $ `docker volume create psql`

---

## Assignment: Named Volumes

1. Database upgrade with containers
2. Create a postgres container with named `volume` `psql-data` using version`9.6.1`
3. Use Docker Hub to learn `VOLUME` path and versions needed to run it.
4. Check logs, stop container
5. Create a new postgres container with same named volume using `9.6.2`
6. Check logs to validate


- $ `docker volume create psql`
- $ `docker run -d --name psql1 -e POSTGRES_PASSWORD=mypassword -v psql:/var/lib/postgresql/data postgres:15.1`
- $ `docker logs psql1`
- $ `docker stop psql1`

- $ `docker run -d --name psql2 -e POSTGRES_PASSWORD=mypassword -v psql:/var/lib/postgresql/data postgres:15.2`
- $ `docker logs psql2`
- $ `docker stop psql2`

## Assignment: Bind Mounds


# Section 7: Making It Easier with Docker Compose: The Multi-Container Tool

Docker Compose template
```bash
# version isn't needed as of 2020 for docker compose CLI. 
# All 2.x and 3.x features supported
# Docker Swarm still needs a 3.x version
# version: '3.9'

services:  # containers. same as docker run
  servicename: # a friendly name. this is also DNS name inside network
    image: # Optional if you use build:
    command: # Optional, replace the default CMD specified by the image
    environment: # Optional, same as -e in docker run
    volumes: # Optional, same as -v in docker run
  servicename2:

volumes: # Optional, same as docker volume create

networks: # Optional, same as docker network create
```

In 2022, Docker announced the General Availability of Docker Compose V2.

All you need to do is simply remove the `dash` (-) from your Docker Compose commands: `docker-compose up` becomes `docker compose up`, etc.