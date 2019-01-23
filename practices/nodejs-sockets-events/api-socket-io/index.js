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

const getApiAndEmit = async socket => {
	try{
		const res = await axios.get("https://api.darksky.net/forecast/94b30d6e4e3a9981ef1f7fac934eaabb/37.8267,-122.4233");
		socket.emit("From API DarkSky: ", res.data.currently.temperature);
	}catch(err){
		console.log(`An error has occurred: ${err.code}`);
	}
};

let interval;
io.on("connection", socket => {
	console.log("New client connected");
	if (interval) {
		clearInterval(interval);
	} 
	interval = setInterval(() => getApiAndEmit(socket), 10000);
	socket.on("disconnect", () => console.log("Client disconnected"));
});

app.listen(port, () => console.log(`API running at http://localhost:${port} with status: 200`));