const router = require("express").Router();
const controller = require("../controllers/EventController2");

router.get("/events/getEvents/:eventId", controller.getEventById);

module.exports = router;