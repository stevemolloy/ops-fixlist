FROM node:10-alpine as builder

WORKDIR /build

COPY public public

COPY package.json package-lock.json ./
RUN npm install

COPY src src
RUN npx react-scripts build

FROM nginx:1.15-alpine
COPY --from=builder /build/build /usr/share/nginx/html
