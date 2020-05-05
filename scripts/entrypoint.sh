#!/usr/bin/env bash

# Entrypoint
#
# Project: Baythium Packer Client
# File: /scripts/entrypoint.sh
# Organization: Baythium Ecosystem (https://baythium.com)

: '
Entrypoint

Project: Baythium Packer - Client
File: /scripts/entrypoint.sh
Initial author: Damien Bayes <damien.bayes.db@gmail.com>
'

# App path exits?
if [ ! -d "/nginx" ]; then
  echo "The directory /nginx doesn't exist. Please mount or create it."
  exit 1
fi

# Copy nginx app config
cp /nginx/*.conf /etc/nginx/conf.d/

# Run nginx
nginx -g "daemon off;"
