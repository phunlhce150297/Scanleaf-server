const express = require("express");
const route = express.Router();

const plant = require("../controllers/PlantController");

//get all plants info
route.get("/getAll", plant.getAllPlant);

module.exports = route;
