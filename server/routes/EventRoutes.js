const router = require("express").Router();
const controller = require("../controllers/EventController");

router.get("/events/:userId", controller.getEventForUser);

module.exports = router;