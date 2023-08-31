FROM node:lts-alpine as build

WORKDIR /server

COPY . /server

RUN npm install

RUN npm run build

CMD ["npm", "start"]