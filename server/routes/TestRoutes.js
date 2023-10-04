const router = require("express").Router();
const controller = require("../controllers/TestController");

router.get("/test", controller.test);

module.exports = router;