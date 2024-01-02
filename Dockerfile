FROM node:20-alpine

WORKDIR /home/node/app

COPY package.json /home/node/app
RUN npm install -g npm
RUN node --version 

EXPOSE 3000
