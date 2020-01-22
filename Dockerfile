FROM node:10

RUN mkdir /usr/app
WORKDIR /usr/app

COPY package.json ./
RUN yarn

COPY . ./

EXPOSE 3000

CMD yarn dev
