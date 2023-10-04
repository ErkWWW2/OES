const { mockDetails, mockDates } = require('../model/mockDB'); // Import mock events data

async function getEventForUser(req, res)
{
    const userId = req.params.userId;   // Get userId from parameters in the request

    // Get events from the mock database
    const userEvents = mockDetails.filter(event => event.part.includes(parseInt(userId)));

    console.log(userEvents);            // Log in server
    res.json({ events: userEvents });   // Send response to client
}
  
function getEventDatesById(req, res) {
    const eventId = req.params.eventId;
    const eventDates = mockDates.filter(date => date.eventId === parseInt(eventId));
    res.json(eventDates);
}

module.exports = { getEventForUser, getEventDatesById };