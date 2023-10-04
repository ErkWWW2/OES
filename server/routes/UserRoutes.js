const router = require("express").Router();
const controller = require("../controllers/UserController");

router.get("/user/:id", controller.getUserById);

module.exports = router;