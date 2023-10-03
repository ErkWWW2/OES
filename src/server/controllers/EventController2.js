const EventDetails = require("../model/EventDetailsModel");
const EventDates = require("../model/EventDateModel");
const { paste } = require("@testing-library/user-event/dist/paste");

const EventDetailsModel = [
    { 
        eventId: 1, 
        name: 'Event 1', 
        desc: 'This event is for testing events the same event on multiple dates', 
        part: [1,2], 
        org: [1] 
    },
    { 
        eventId: 2, 
        name: 'Event 2', 
        desc: 'This event is for general testing', 
        part: [2,3], 
        org: [2] 
    },
    {
        eventId: 3, 
        name: 'Event 3', 
        desc: 'This event is for testing event ranges', 
        part: [1,2,3], 
        org: [1,2] 
    },
];

async function getEventById(req, res)
{
    id = req.params.userId; // Get the event id from the call URL
    res.send(EventDetails.getEventById(id));
}

async function getEventForUser(req, res)
{
    const userId = req.params.userId;

    const userEvents = EventDetailsModel
        .filter(event => event.part.includes(parseInt(userId)))
        .map(event => event.eventId);

    res.json({events: userEvents});
}

module.exports = { getEventById, getEventForUser };