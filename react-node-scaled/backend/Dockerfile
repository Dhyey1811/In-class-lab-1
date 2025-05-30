FROM node:18 AS builder
WORKDIR /app
COPY server.js .
RUN npm init -y
RUN npm install express

FROM node:18
WORKDIR /app
COPY --from=builder /app .
CMD ["node", "server.js"]
