const mainRoutes = require("express").Router();
const foods = require("../models/foods");
const foodsRoutes = require("./foodsRoutes");

mainRoutes.use("/foods", foodsRoutes);

module.exports = mainRoutes;