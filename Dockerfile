FROM node:22-bookworm-slim

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

RUN yarn playwright install-deps

RUN yarn playwright install

COPY . .
