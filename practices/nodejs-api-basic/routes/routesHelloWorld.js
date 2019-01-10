const express = require('express');
const controller = require('../controllers/controllerHelloWorld.js');

const api = express.Router();

api.use(bodyParser.urlencoded({ extended: false }));
api.use(bodyParser.json());

api.get('/hola', controller.getHelloWorld);

module.exports = api;

