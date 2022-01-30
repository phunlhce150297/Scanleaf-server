const Plant = require('../models/Plants');

class HomeController {

    getAllPlant(req, res, next) {
        Plant.find({})
            .then(plants => res.json(plants))
            .catch(next);
    };

    trendingPlant(req, res, next) {
        
    }

}

module.exports = new HomeController();
