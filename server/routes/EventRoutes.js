const router = require("express").Router();
const controller = require("../controllers/EventController");

router.get("/events/u/:userId", controller.getEventForUser);
router.get("/event-dates/:eventId", controller.getEventDatesById);
router.get("/events/:userId/:year/:month", controller.getEventsForMonth);
router.get("/event-dates/IDN/:date", controller.getEventIDNForDate);
router.get("/events/:eventId", controller.getEventsById);
router.post("/create-event/:name/:desc/:part/:org/:start/:end", controller.createEvent);

module.exports = router;