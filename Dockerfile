FROM node:18.19.1-alpine

WORKDIR /app

COPY ./ ./

RUN npm i -g pnpm

RUN pnpm i

RUN pnpm db:generate:prod

RUN pnpm build

ENTRYPOINT ["pnpm", "start"]
