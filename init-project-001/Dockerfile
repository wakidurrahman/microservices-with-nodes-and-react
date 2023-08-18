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