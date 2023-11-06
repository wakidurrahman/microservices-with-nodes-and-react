# syntax=docker/dockerfile:1

FROM node:18-alpine
WORKDIR /app

COPY package.json ./
RUN npm install --production
# Copy over all of our remaining source code
COPY ./ ./

CMD ["node" , "src/index.js"]
EXPOSE 3000