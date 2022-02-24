const Plant = require("../models/Plants");

class PlantController {
  /**
   * get all plant in collection
   */
  getAllPlant(req, res, next) {
    Plant.find({})
      .then((data) => res.json(data))
      .catch(next);
  }
}

module.exports = new PlantController();
