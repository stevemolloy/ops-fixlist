FROM node:10-alpine

ENV NODE_ENV production

WORKDIR /app

COPY .babelrc package.json package-lock.json ./
RUN npm install

COPY src src
EXPOSE 8080

CMD ["node", "."]
