const mongooese = require('mongoose');
const Schema = mongooese.Schema;

const PlantSchema = new Schema({
    name: {
        type: String,
        required: true,
        uppercase: true
    },
    otherName: {
        type: String,
        default: "",
    },
    type: {
        type: String,
        required: true,
    },
    usage: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true
    }
});

module.exports = mongooese.model('plants', PlantSchema);
