const foodsRoutes = require("express").Router();
const foodsControllers = require("../controllers/foodsControllers");

foodsRoutes.get("/", foodsControllers.getAllfoods);
foodsRoutes.post("/", foodsControllers.postFoods);
foodsRoutes.get("/:id", foodsControllers.getDataById);
foodsRoutes.delete("/:id", foodsControllers.deleteFoods);
foodsRoutes.put("/:id", foodsControllers.updateFoods);

module.exports = foodsRoutes;