#!/usr/bin/env bash

# Boot
#
# Project: Baythium Packer Client
# File: /scripts/boot.sh
# Organization: Baythium Ecosystem (https://baythium.com)

container="baythium-ecosystem/baythium-packer_client"
network="baythium-network-e8dmczz4"
timestamp=$(date +%s)

# Check if baythium-network-e8dmczz4 exists
if [ ! "$(docker network ls | grep $network)" ]; then
  echo "Creating a new network with the name: $network"
  docker network create $network
else
  echo "The $network already exists"
fi

docker build . \
--file dockerfile \
--tag baythium-ecosystem/baythium-packer_client:$timestamp

# Check if a container is already running
if [ ! "$(docker ps | grep $container)" ]; then
  if [ "$(docker ps -aq -f name=$container)" ]; then
    # Cleanup
    echo "Cleaning"
    docker rm $container
  fi
    
  # Run a container
  echo "Running a container"
  
  docker run \
  -d \
  --name baythium-packer_client \
  --expose 10033 \
  --net $network \
  --ip 172.18.0.3 \
  -e "VIRTUAL_HOST=packer.baythium.com" \
  --restart=on-failure:3 \
  baythium-ecosystem/baythium-packer_client:$timestamp
else
  echo "The container with the name: $container already running"
fi
