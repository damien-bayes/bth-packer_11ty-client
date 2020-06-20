# Docker

Docker plays an essential part on this project and if you are familiar with it you CAN use the following commands for getting the ball rolling.

```bash
# Remove all containers with the specified name
docker rm $(docker stop $(docker ps --filter "name=baythium-packer_client" --format="{{.ID}}"))

# Remove all images with the specified name
docker rmi $(docker images | grep "baythium-packer_client")

timestamp=$(date +%s)

# Build a new docker image using the Dockerfile
docker build . \
--file dockerfile \
--tag baythium-ecosystem/baythium-packer_client:$timestamp

# List all images to check that the required image exists
docker images
 
# Run an isolated container using the specified options
docker run \
-d \
--name baythium-packer_client \
--expose 10033 \
--net baythium-network-d83f1df8 \
--ip 172.18.0.3 \
-e "VIRTUAL_HOST=packer.baythium.com" \
--restart=on-failure:3 \
baythium-ecosystem/baythium-packer_client:$timestamp
```

## References