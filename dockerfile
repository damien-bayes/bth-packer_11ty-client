# Dockerfile
#
# Project: Baythium Packer
# File: /dockerfile
# Initial author: Damien Bayes <damien.bayes.db@gmail.com>

FROM nginx:1.16.1 AS builder

LABEL maintainer = "damien.bayes.db@gmail.com"

###################
# RUNTIME VARIABLES
###################

# NOTE: The variables set with ENV are for runtime only
ENV NGINX_VERSION 1.16.1
ENV ELEVENTY_ENV production

# COPY scripts/entrypoint.sh /usr/bin
COPY dist/ /usr/share/nginx/html/
COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY nginx/custom-errors.conf /etc/nginx/custom-errors.conf
COPY nginx/nginx.default.conf /etc/nginx/conf.d/default.conf

# RUN chown nginx:nginx /usr/share/nginx/html/*
# RUN chmod +x /usr/bin/entrypoint.sh
RUN chown -R nginx:nginx /usr/share/nginx/html && \ 
    chmod -R 755 /usr/share/nginx/html

EXPOSE 10033

# ENTRYPOINT /usr/bin/entrypoint.sh
CMD ["nginx", "-g", "daemon off;"]
