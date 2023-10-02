# This image only use for production environment setup
# Build Phase
FROM node:18-alpine as builder 

WORKDIR '/app'

COPY ./package.json ./
RUN npm install
COPY ./ ./

RUN npm run build 


# Run Phase
FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html
