const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect("mongodb://localhost/Scanleaf");
    console.log("Connect DB successful");
  } catch (error) {
    console.log("Connect DB failure");
    console.log(error);
  }
}

module.exports = { connectDB };
