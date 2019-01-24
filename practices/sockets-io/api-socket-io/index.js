const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const axios = require("axios");
const api = require("./routes/routesHelloWorld");
const controller = require("./controllers/controllerHelloWorld")
const port = process.env.PORT || 3080;
const app = express();
app.use(api);
const server = http.createServer(app);
const io = socketIo(server);

io.on("connection", socket => {
  console.log("New client connected"), setInterval(
    () => getApiAndEmit(socket),
    10000
  );
  socket.on("disconnect", () => console.log("Client disconnected"));
});

const getApiAndEmit = async socket => {
  try {
    const res = await axios.get(
      "https://api.darksky.net/forecast/94b30d6e4e3a9981ef1f7fac934eaabb/37.8267,-122.4233"
    );
    socket.emit("From API DarkSky: ", res.data.currently.temperature);
  } catch (err) {
    console.error(`An error has ocurred: ${err.code}`);
  }
};

server.listen(port, () => console.log(`Server listening on port: ${port}`));