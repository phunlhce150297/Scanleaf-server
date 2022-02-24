const express = require("express");
const route = express.Router();
const UserController = require("../controllers/UserController");

// [GET] GET ALL DATA
route.get("/getAll", UserController.getAllUser);

// [POST] LOGIN
route.post("/login", UserController.login);

// [POST] REGISTER
route.post("/register", UserController.register);

module.exports = route;
