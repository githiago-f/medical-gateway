FROM node:16.13-alpine

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app/medical-gateway

COPY package.json pnpm-lock.yaml ./

RUN yarn

COPY . .

EXPOSE 3000

CMD yarn start:dev
