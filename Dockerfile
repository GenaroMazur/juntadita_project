FROM node:20 AS build_stage

WORKDIR /app

COPY . .

RUN yarn install

RUN yarn test

RUN yarn build

FROM node:20-alpine

WORKDIR /app

COPY --from=build_stage --chown=node:node /app/dist /app/dist
COPY --from=build_stage --chown=node:node /app/package.json /app/package.json

RUN yarn --production
USER node

ENV TCP_PORT=3000
EXPOSE 3000

ENV NODE_ENV=production
CMD ["node", "dist/index.js"]