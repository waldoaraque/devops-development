sudo apt-get remove docker docker-engine docker.io

sleep 3

sudo apt-get update \
  && sudo apt-get install -qy docker.io

sleep 3