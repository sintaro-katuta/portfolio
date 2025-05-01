FROM node:lts

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

RUN yarn playwright install-deps

RUN yarn playwright install

COPY . .

