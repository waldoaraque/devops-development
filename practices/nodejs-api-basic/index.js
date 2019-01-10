const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controllers/controllerHelloWorld');
const api = require('./routes/routesHelloWorld');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(api);

app.listen(port, () => console.log(`API running at http://localhost:${port}`));