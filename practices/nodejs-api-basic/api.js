'use-strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/marvel', (req, res) => {
	res.send(200, {marvelCharacter: []});
});

app.get('/api/marvel/:marvelCharacterId', (req, res) => {
	
});

app.post('/api/marvel', (req, res) => {
	console.log(req.body);
	res.status(200).send({message: 'The marvelCharacter it does not exist'});
});

app.listen(port, () => {
	console.log(`API running at http://localhost:${port}`);
});