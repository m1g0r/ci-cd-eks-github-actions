FROM node:8.6-alpine
WORKDIR /app
COPY . .
RUN npm i
RUN npm test

EXPOSE 8080

CMD node server.js
