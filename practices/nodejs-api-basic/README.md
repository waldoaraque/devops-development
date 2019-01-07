# Nodejs Practice: Basic API
## Pre-requirements:
- Nodejs installed.

## Make the basics steps to create an API.
We position ourselves in the folder to start the project, in this case `nodejs-api-basic`.

Now, let's start our project using `npm` commands
```shell
$ npm init -y
``` 
This should have created the package.json file, now we can install dependencies for nodejs. We will install express:
```shell
$ npm i -S express 
```
The `node_modules` folder, which we are going to add in a `.gitignore` file, will have been downloaded, to avoid uploading this folder to our git repository. 
```shell
$ nano .gitignore
```
With this content:
```shell
node_modules/
```
We will create the file that will contain the code:
```shell
$ touch api.js
```
Now that we have express, we are going to create our basic API in the file `api.js` with the following code:
```shell
'use-strict'

const express = require('express');
const app = express();

app.listen(3000, () => {
	console.log('API running at http://localhost:3000');
});
```
To test than our API works, we can run the following command:
```shell
node api.js
```
The output of the shell, it should look like this:
```shell
API running at http://localhost:3000
```
So that our API can read JSON, we need to install another module, its name is `body-parser`
```shell
$ npm i -S body-parser
```
Now, we're also going to change the code a bit to make our API use this:
```shell
'use-strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(port, () => {
	console.log(`API running at http://localhost:${port}`);
});
```
To improve our way of developing the API, we are going to install another dependency called `nodemon`:
```shell
$ npm i -D nodemon
```
Now in our package.json we must add a script to start our API with nodemon, it should look like this:
```shell
{
  "name": "nodejs-api-basic",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "nodemon api.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.18.3",
    "express": "^4.16.4"
  },
  "devDependencies": {
    "nodemon": "^1.18.9"
  }
}
```
To prove it, we can run in shell:
```shell
$ npm start
```
The output of the shell, it should look like this:
```shell
> nodejs-api-basic@1.0.0 start /nodejs-api-basic
> nodemon api.js

[nodemon] 1.18.9
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node api.js`
API running at http://localhost:3000
```

## Make better the API with http methods responses.