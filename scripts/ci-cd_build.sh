cd baythium-projects/baythium-packer_client

ids=$(docker ps -a --filter "name=baythium-packer_client" --format="{{.ID}}")
[[ -n $ids ]] && docker stop $ids && docker rm $ids

images=$(docker images -a | grep "baythium-packer_client" | awk '{print $1":"$2}')
[[ -n $images ]] && docker rmi $images

timestamp=$(date +%s)

docker build . --rm --file dockerfile --tag baythium-ecosystem/baythium-packer_client:$timestamp
docker run -d --name baythium-packer_client --expose 10033 --net baythium-network-1 -e "VIRTUAL_HOST=packer.baythium.com,packer.baythium.space" --restart=on-failure:3 baythium-ecosystem/baythium-packer_client:$timestamp
