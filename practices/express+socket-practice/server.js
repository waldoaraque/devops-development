const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const port = process.env.PORT || 4001;
const app = express();

const server = http.createServer(app);
const io = socketio(server);

io.on('connection', socket => {
	console.log('User connected.');

	socket.on('disconnect', () => {
		console.log('User disconnected.');
	});
});

server.listen(port, () => console.log(`Listening on port ${port}`));