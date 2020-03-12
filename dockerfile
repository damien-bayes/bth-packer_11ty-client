FROM nginx:1.16.1

COPY html/ /usr/share/nginx/html/

RUN chown nginx:nginx /usr/share/nginx/html/*

EXPOSE 10033

CMD ["nginx", "-g", "daemon off;"]