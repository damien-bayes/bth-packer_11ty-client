FROM nginx:1.16.1 AS builder

LABEL maintainer = "damien.bayes.db@gmail.com"

ENV NGINX_VERSION 1.16.1
ENV ELEVENTY_ENV production

COPY dist/ /usr/share/nginx/html/
# COPY scripts/entrypoint.sh /usr/bin

COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY nginx/custom-errors.conf /etc/nginx/custom-errors.conf
COPY nginx/nginx.default.conf /etc/nginx/conf.d/default.conf

# RUN chown nginx:nginx /usr/share/nginx/html/*
RUN chown -R nginx:nginx /usr/share/nginx/html

RUN chmod -R 755 /usr/share/nginx/html
# RUN chmod +x /usr/bin/entrypoint.sh

EXPOSE 10033

# ENTRYPOINT /usr/bin/entrypoint.sh
CMD ["nginx", "-g", "daemon off;"]
