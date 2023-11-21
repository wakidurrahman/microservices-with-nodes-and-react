# Section 4: Making Real Projects with Docker

## Steps to create nodejs web App with docker

1. Create NodeJS web app
2. Create a Dockerfile
3. Build image from dockerfile
4. Run image as container
5. Connect to web app from a browser


`$ docker build -t wakidur/sampleweb:latest .`
`$ docker run -p 5000:8080 wakidur/sampleweb`

`$ docker run -it wakidur/sampleweb sh `
`$ docker exec -it <container id> sh`

```
# step 02. Create a Dockerfile

# Specify a base image
FROM node:alpine

# Story Image 
WORKDIR /app

# copy package and rebuild image if any update happen inside package.json
COPY ./package.json ./
# Install some dependencies
RUN npm install 

# copy dir
COPY ./ ./

# Default command
CMD [ "npm", "run", "start" ]

```