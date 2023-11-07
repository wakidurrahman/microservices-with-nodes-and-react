# syntax=docker/dockerfile:1

# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/engine/reference/builder/

ARG NODE_VERSION=18.10.0

# In the Dockerfile, you first add a label as base to the FROM node:${NODE_VERSION}-alpine statement. 
# This allows you to refer to this build stage in other build stages.
FROM node:${NODE_VERSION}-alpine as base

WORKDIR /usr/src/app
# Expose the port that the application listens on.
EXPOSE 3000


# Rather than creating one `Dockerfile for production`, and another `Dockerfile for development`, 
# you can use one multi-stage Dockerfile for both.

# Add a new build stage labeled `dev` to install your development dependencies and start the container using `npm run dev`
FROM base as dev 
# Download dependencies as a separate step to take advantage of Docker's caching.
# Leverage a cache mount to /root/.npm to speed up subsequent builds.
# Leverage a bind mounts to package.json and package-lock.json to avoid having to copy them into
# into this layer.
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --include=dev
# Run the application as a non-root user.
USER node
# Copy the rest of the source files into the image.
COPY . .
# CMD ["npm", "run", "dev"]
CMD npm run dev


# Add a stage labeled prod that omits the development dependencies and runs your application using `node src/index.js`
FROM base as prod
# Use production node environment by default.
ENV NODE_ENV production
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev
USER node
COPY . .
# Run the application.
CMD node src/index.js

# Run tests when building
FROM base as test
ENV NODE_ENV test 
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --include=dev
USER node
COPY . .
# Instead of using CMD in the test stage, use RUN to run the tests. 
# The reason is that the CMD instruction runs when the container runs, 
# and the RUN instruction runs when the image is being built and the build will fail if the tests fail.
RUN npm run test 

