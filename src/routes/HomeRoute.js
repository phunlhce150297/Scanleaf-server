const express = require('express');
const route = express.Router();

const home = require('../controllers/HomeController');

route.get('/', home.getAllPlant);

module.exports = route;
