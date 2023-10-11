const router = require("express").Router();
const controller = require("../controllers/UserController");

router.get("/getCurrentUserId", controller.getCurrentUserId);

module.exports = router;