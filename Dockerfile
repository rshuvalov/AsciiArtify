FROM node:21-alpine3.18
WORKDIR /app
COPY ./src/index.js /app
EXPOSE 3000
CMD ["node", "index.js"]