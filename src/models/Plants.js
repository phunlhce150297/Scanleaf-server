const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlantSchema = new Schema({
  name: {
    type: String,
    required: true,
    uppercase: true,
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
    required: true,
  },
});

module.exports = mongoose.model("Plant", PlantSchema);
