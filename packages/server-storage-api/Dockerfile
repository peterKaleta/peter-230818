FROM node:8.11

RUN curl -o- -L https://yarnpkg.com/install.sh | bash
WORKDIR /app
RUN mkdir -p /app/src
COPY package.json /app
COPY .babelrc /app

RUN yarn install
COPY ./src /app/src
CMD npm run start
EXPOSE 8989
