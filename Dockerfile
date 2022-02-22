FROM node:16.13.2-alpine3.15
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --silent && yarn cache clean
COPY babel.config.js docusaurus.config.js sidebars.js tsconfig.json ./
COPY blog blog
COPY docs docs
COPY src src
COPY static static
RUN yarn build
EXPOSE 3000
CMD ["yarn", "serve"]

