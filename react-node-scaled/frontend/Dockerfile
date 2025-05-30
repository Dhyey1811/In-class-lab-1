FROM node:18 AS build
WORKDIR /app
COPY public ./public

FROM nginx:alpine
COPY --from=build /app/public /usr/share/nginx/html
