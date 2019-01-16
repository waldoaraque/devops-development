const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

const message = { 
  		gitlab: "hello world"
   	};

app.get("/", (req, res) => {
  res
  .status(200)
  .send(message);
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT} \n ${message.gitlab}`));