# production stage
FROM nginx:stable-alpine as production
COPY --from=build /app/build ../../..//usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
