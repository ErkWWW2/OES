const EventDetails = require("../model/EventDetailsModel");

async function getEventById(req, res)
{
    id = req.params; // Get the event id from the call URL
    res.send(EventDetails.getEventById(id));
}

module.exports = { getEventById };