const { mockDetails, mockDates } = require('../model/mockDB'); // Import mock events data

async function getEventById(req, res)
{
    id = req.params.userId; // Get the event id from the call URL
    res.send(id);
}

async function getEventForUser(req, res)
{
    const userId = req.params.userId;

    const userEvents = mockDetails
        .filter(event => event.part.includes(parseInt(userId)))
        .map(event => event.eventId);

    console.log(userEvents);

    res.json({ events: userEvents });
}

module.exports = { getEventForUser };