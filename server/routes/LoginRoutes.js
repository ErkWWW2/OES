const router = require("express").Router();
const userController = require("../controllers/serverLoginController");

router.post("/register/:name/:email/:password", userController.register);
router.get("/login/:name/:password", userController.login);

module.exports = router;