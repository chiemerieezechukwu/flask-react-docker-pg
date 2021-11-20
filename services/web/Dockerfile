# syntax=docker/dockerfile:1

FROM node:13.12.0-alpine

WORKDIR /web

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm i

COPY . .

CMD ["npm", "start"]