const { mockDetails, mockDates } = require('../model/mockDB'); // Import mock events data

async function getEventForUser(req, res)
{
    const userId = req.params.userId;   // Get userId from parameters in the request

    // Get events from the mock database
    const userEvents = mockDetails
        .filter(event => event.part.includes(parseInt(userId)))
        .map(event => event.eventId);

    console.log(userEvents);            // Log in server
    res.json({ events: userEvents });   // Send response to client
}

function getEventNameById(req, res) {
    const eventId = req.params.eventId;
    const event = mockDetails.find(event => event.eventId === parseInt(eventId)); // Get eventName from mock database
    if (event) {
        res.json({ name: event.name });
    } else {
        res.status(404).json({ error: 'Event not found' });
    }
}

function getEventDescriptionById(req, res) {
    const eventId = req.params.eventId;
    const event = mockDetails.find(event => event.eventId === parseInt(eventId)); // Get eventDesc from mock database
    if (event) {
      res.json({ description: event.desc });
    } else {
      res.status(404).json({ error: 'Event not found' });
    }
}
  
function getEventDatesById(req, res) {
    const eventId = req.params.eventId;
    const eventDates = mockDates
        .filter(date => date.eventId === parseInt(eventId))
        .map(date => ({start: date.start, end: date.end}));
    res.json(eventDates);
}

module.exports = { getEventForUser, getEventDatesById };