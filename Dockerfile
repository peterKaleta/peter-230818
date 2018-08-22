FROM node:8.11

RUN curl -o- -L https://yarnpkg.com/install.sh | bash
WORKDIR /app
RUN mkdir -p /app/server-storage-api
COPY package.json /app
COPY .babelrc /app

RUN yarn install
COPY ./server-storage-api /app/server-storage-api
CMD npm run start-api
EXPOSE 8989
