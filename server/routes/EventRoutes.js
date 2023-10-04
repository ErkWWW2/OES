const router = require("express").Router();
const controller = require("../controllers/EventController2");

router.get("/events/:userId", controller.getEventForUser);

module.exports = router;