FROM node:20.13.1-alpine3.20 AS base

WORKDIR /code
COPY package.json /code
COPY package-lock.json /code
RUN npm ci
FROM base AS development

CMD ["npm", "start"]