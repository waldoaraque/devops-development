const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const socketIO = require('socket.io');

const controller = require('./controllers/controllerHelloWorld');
const api = require('./routes/routesHelloWorld');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(api);

const server = http.createServer(app);

const port = process.env.PORT || 3080;
const io = socketIO(server);

io.on('connection', (socket) => {
  console.log("Client Successfully Connected");

  socket.on('message', () =>{
  	console.log('message has been received');
  	io.emit('emitiendo','successfully connection');
  });

  socket.on('disconnect', () => {
  	console.log('disconnected');
  });
});

app.listen(port, () => console.log(`API running at http://localhost:${port} with status: 200`));
