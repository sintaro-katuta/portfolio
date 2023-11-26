FROM node:latest

WORKDIR /usr/src/app

RUN npm install -g npm@latest

RUN npm install -g create-react-app

EXPOSE 3002