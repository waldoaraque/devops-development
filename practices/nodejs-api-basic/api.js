'use-strict'

const express = require('express');
const app = express();

app.listen(3000, () => {
	console.log('API running at http://localhost:3000');
});