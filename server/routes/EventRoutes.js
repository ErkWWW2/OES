const router = require("express").Router();
const controller = require("../controllers/EventController");
const userController = require("../controllers/serverLoginController");

router.get("/events/u/:userId", controller.getEventForUser);
router.get("/event-dates/:eventId", controller.getEventDatesById);
router.get("/events/:userId/:year/:month", controller.getEventsForMonth);
router.get("/event-dates/IDN/:date", controller.getEventIDNForDate);
router.get("/events/:eventId", controller.getEventsById);
router.post("/register", userController.register);
router.post("/login", userController.login);

module.exports = router;