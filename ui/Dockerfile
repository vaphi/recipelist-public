FROM node:lts-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# production stage
FROM nginx:stable-alpine as production
COPY --from=build /app/build ../../..//usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
