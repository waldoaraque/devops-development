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
const http = require('http');
const handleRequest = function(request, response) {
  response.writeHead(200);
  response.end("Hello World!");
}
const www = http.createServer(handleRequest);
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
$ docker run -d -p 8080:8080 USERNAME/hello-node:v1
```
This is the console output you should see something similar to this:
```sh
325301e6b2bffd1d0049c621866831316d653c0b25a496d04ce0ec6854cb7998
```
Use curl or wget from your CloudShell prompt if you'd like:
```sh
$ curl http://localhost:8080
```
This is the console output you should see:
```sh
Hello World!
```
Let's now stop the running container. In this example, our app was running as Docker process 2c66d0efcbd4:
```sh
$ docker ps
```
This is the console output you should see:
```sh
CONTAINER ID        IMAGE                            COMMAND
2c66d0efcbd4        USERNAME/hello-node:v1           "/bin/sh -c 'node  
```
Stop the running container using the ID provide above:
```sh
$ docker stop 2c66d0efcbd4
```
This is the console output you should see:
```sh
2c66d0efcbd4
```
Now, you must be login with your account docker hub in the shell:
```sh
$ docker login --username=yourhubusername --email=youremail@company.com
```
You can now push your container image to docker hub repository:
```sh
$ docker push USERNAME/hello-node:v1
```
This initial push may take a few minutes to complete:
```sh
The push refers to a repository [USERNAME/hello-node]
ba6ca48af64e: Pushed 
381c97ba7dc3: Pushed 
604c78617f34: Pushed 
fa18e5ffd316: Pushed 
0a5e2b2ddeaa: Pushed 
53c779688d06: Pushed 
60a0858edcd5: Pushed 
b6ca02dfe5e6: Pushed 
v1: digest: sha256:8a9349a355c8e06a48a1e8906652b9259bba6d594097f115060acca8e3e941a2 size: 2002
```
## Create a yamls files to deploy the app in kubernetes.
Create a yaml file.
```sh
$ nano k8s.yaml
```
With this content:
(IMPORTANT: make sure to replace USERNAME with yours):
```sh
---
apiVersion: v1
kind: Deployment
metadata:
  name: hello-kubernetes
spec:
  replicas: 2
  selector:
    matchLabels:
      app: hello-kubernetes
  template:
    metadata:
      labels:
        app: hello-kubernetes
    spec:
      containers:
      - name: hello-kubernetes
        image: USERNAME/hello-node:v1
        ports:
        - containerPort: 8080
---
apiVersion: v1
kind: Service
metadata:
  name: hello-kubernetes
spec:
  type: NodePort
  ports:
  - port: 80
    targetPort: 8080
  selector:
    app: hello-kubernetes

```