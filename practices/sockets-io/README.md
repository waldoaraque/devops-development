# Socket.io with NodeJS and ReactJS
![N|Solid](https://cdn-images-1.medium.com/max/1600/1*ODPpimMHuBWuX0iivAFdhA.png)
This folder contain two apps, the `api-socket-io` is the api server with `NodeJS` and `react-socket-io` is the client to connect with the server from a `ReactJS` template. 

To test the app, we will clone the index repository:
```shell
$ git clone https://gitlab.com/betpluz/standards/hello-world-devops.git
```
Now, we can open the folder `socket-io` to see the projects:
```shell
$ cd hello-world-devops/practices/socket-io/
```
Instalamos las dependencias con `npm` and run, for each of the projects:
```shell
$ cd api-socket-io
$ npm install
$ npm start
```
In another shell we go to the other:
```shell
$ cd react-socket-io
$ npm install
$ npm start
```
Now, we can go to the browser that opens our react template in: `http:localhost:3000`.

In addition, in the shell of our api server `api-socket-io`, we can see in the console output something similar to this:
```shell
> api-hello-world@1.0.0 start /home/waldo/jobs/hello-world-devops/practices/sockets-io/api-socket-io
> nodemon index.js

[nodemon] 1.18.9
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node index.js`
Server listening on port: 3080
New client connected
```
This means that the react socket works and issues the message from the client to our server api correctly.
