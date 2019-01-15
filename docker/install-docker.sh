VERSION=18.03.0~ce-0~ubuntu

#remove docker olds versions 
sudo apt-get remove docker docker-engine docker.io containerd runc
sudo apt-get update

#some requirements
sudo apt-get install -y \
    apt-transport-https \
    ca-certificates \
    curl \
    software-properties-common

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

sudo apt-key fingerprint 0EBFCD88

#add the repository to the machine
sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"

sudo apt-get update && sudo apt-get install -y docker-ce

sudo apt-get install docker-ce=${VERSION}

sudo docker -v

#test the container engine
sudo docker run hello-world
