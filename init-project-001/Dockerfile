# step 02. Create a Dockerfile

# Specify a base image
FROM node:18

# copy dir
COPY ./ ./

# Install some dependencies
RUN npm install 

EXPOSE 4000

# Default command
CMD [ "npm", "run", "start" ]