const express = require('express');
const app = express();
const server = require('http').Server(app);

const io = require('socket.io')(server);
const port = process.env.PORT || 8080;

app.get('/hola', (req, res) => { 
	res.status(200).send('Hello World!');
});

io.on('Connection', (socket) => {
	console.log('Someone is connected with sockets');
	socket.emit('message', console.log('holi'));
});

server.listen(port, () => console.log(`Server is running at http://localhost:${port}`));