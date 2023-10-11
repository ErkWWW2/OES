const router = require("express").Router();
const UserController = require("../controllers/serverLoginController");
const controller = require("../controllers/EventController");

router.get("/events/u/", controller.getEventForUser);
router.get("/event-dates/:eventId", controller.getEventDatesById);
router.get("/events/u/:year/:month", controller.getEventsForMonth);
router.get("/event-dates/IDN/:date", controller.getEventIDNForDate);
router.get("/events/:eventId", controller.getEventsById);
router.post("/create-event/:name/:desc/:part/:org/:start/:end", controller.createEvent);
router.delete("/delete/:eventId", controller.deleteEvent);

module.exports = router;