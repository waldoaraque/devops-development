const express = require('express');
const controller = require('../controllers/controllerHelloWorld');

const api = express.Router();

api.get('/', controller.getAnMessage);
api.get('/answerToMe', controller.getHelloWorld);

module.exports = api;

