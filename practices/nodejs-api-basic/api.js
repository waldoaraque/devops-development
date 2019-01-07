'use-strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/hello', (req, res) => {
	res.send({message: `Hello World`});
});

app.listen(port, () => {
	console.log(`API running at http://localhost:${port}`);
});