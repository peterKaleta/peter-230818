FROM node:8.11

RUN curl -o- -L https://yarnpkg.com/install.sh | bash

WORKDIR /app
RUN mkdir -p /app/src
COPY package.json /app
COPY .babelrc /app
COPY .eslintrc /app
COPY webpack /app/webpack
COPY webpack.config.js /app

RUN yarn install
COPY ./src /app/src

RUN npm run build

RUN npm install -g http-server

EXPOSE 8080
WORKDIR /app/build

CMD [ "http-server" ]
