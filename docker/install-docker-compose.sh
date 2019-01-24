#remove older installation for docker-compose
sudo rm /usr/local/bin/docker-compose
sleep 3

#we are download the binary for docker-compose
sudo curl -L "https://github.com/docker/compose/releases/download/1.23.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sleep 3

#apply executable permissions to the binary
sudo chmod +x /usr/local/bin/docker-compose

#test the installation
docker-compose --version