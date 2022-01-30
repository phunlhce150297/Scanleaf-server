const mongoose = require('mongoose');
const Plant = require('../../models/Plant');

function getAllPlants(req, res, next) {
    Plant.find({})
        .then(plants => res.json(plants))
        .catch(next);
};

module.exports = { getAllPlants }
