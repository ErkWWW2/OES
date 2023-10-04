const router = require("express").Router();
const controller = require("../controllers/EventController");

router.get("/events/:userId", controller.getEventForUser);
router.get("/event-dates/:eventId", controller.getEventDatesById);

module.exports = router;