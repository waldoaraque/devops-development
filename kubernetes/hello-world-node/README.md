# Nodejs + Docker + Kubernetes: Practice.

Practice to create a hello world in nodejs, pack with docker and deploy it in kubernetes.

![N|Solid](https://cdn-images-1.medium.com/max/1600/1*gX-N6cHK9p715OUKmNiX5g.jpeg)

## Create your Node.js application.
The first step is to write the application that we want to deploy to Kubernetes. Here is a simple Node.js server:
```sh
$ nano listener.js
```
With this content:
```sh
var http = require('http');
var handleRequest = function(request, response) {
  response.writeHead(200);
  response.end("Hello World!");
}
var www = http.createServer(handleRequest);
www.listen(8080);
```
From Shell simply exit the editor and save the listener.js file. We should have node installed in our shell. We can now run this simple command (the command produces no output):
```sh
$ node listener.js
```
Now open a new browser tab and proxy a request to the instance you just started on port 8080.
![N|Solid](https://developer.okta.com/assets/blog/node-express-typescript/hello-world-8ce4cc2733dea3c91e80a673ddd971c6fa0364bc42305096f4c5aa5a4b837704.jpg)

Now, more importantly, let's package this application in a Docker container.

## Create a Docker container image.
Next, create a Dockerfile which describes the image that you want to build. Docker container images can extend from other existing images so for this image, we'll extend from an existing Node image.
```sh
$ nano Dockerfile
```
With this content:
```sh
FROM node:9
EXPOSE 8080
COPY listener.js .
CMD ["node", "listener.js"]
```
This "recipe" for the Docker image will start from the node image found on the Docker hub, expose port 8080, copy our listener.js file to the image and start the node server as we previously did manually.

Save this Dockerfile and build this image by running the following command

(IMPORTANT: make sure to replace USERNAME with yours):
```sh
$ docker build -t USERNAME/hello-node:v1 .
```
Once this completes (it'll take some time to download and extract everything) you can test the image locally with the following command which will run a Docker container as a daemon on port 8080 from our newly-created container image:
```sh
docker run -d -p 8080:8080 USERNAME/hello-node:v1
```
This is the console output you should see something similar to this:
```sh
325301e6b2bffd1d0049c621866831316d653c0b25a496d04ce0ec6854cb7998
```
Use curl or wget from your CloudShell prompt if you'd like:
```sh
curl http://localhost:8080
```
This is the console output you should see:
```sh
Hello World!
```

