const EventDetails = require("../model/eventDetails");
const EventDates = require("../model/eventDates");

/*
Method to get events for user (User is participant)
Parameters:
    userId:   number, containing the id of the user in question
Returns:
    { events: userEvents }, an object with the events property which contains an array of events. (Only EventDetails)
*/
async function getEventForUser(req, res)
{
    const userId = req.params.userId;   // Get userId from parameters in the request

    try {
    // Get events from the database
    const userEvents = await EventDetails.find({ part: userId });

    console.log(userEvents);            // Log in server
    res.json({ events: userEvents });   // Send response to client
    }
    catch (error) {
      console.error('Error fetching user events: ', error);
      res.status(500).json({ error: 'Internal server error' });
    }
}

/*
Method to get the dates for an event
Parameters:
    eventId:   number, containing the id of the event in question
Returns:
   an array of eventDate objects (array)
*/
async function getEventDatesById(req, res) {
    const eventId = req.params.eventId;
    
    try {
      const eventDates = await EventDates.find({ eventId: eventId });
      res.json(eventDates);
    }
    catch (error) {
      console.error('Error fetching events: ', error);
      res.status(500).json({ error: 'Internal server error' });
    }
}

/*
Method to get the dates for an event
Parameters:
    eventId:   number, containing the id of the event in question
Returns:
   an array of eventDate objects (array)
*/
async function getEventIDNForDate(req, res) {
  const date = req.params.date;
  
  try {
    const eventDate = new Date(date);
    eventDate.setDate(eventDate.getDate());
    eventDate.setHours(2, 0);
    const dateEnd = new Date(eventDate);
    dateEnd.setTime(eventDate.getTime() + 86399999) // +24 hours

    const events = await EventDates.find({
      start: { $lte: dateEnd },
      end: { $gte: eventDate },
    });

    const eventIds = events.map((event) => event.eventId);

    const eventDetails = await EventDetails.find({
      eventId: { $in: eventIds }
    });

    const eventData = eventDetails.map((event) => {
      return {
        eventId:  event.eventId,
        name:     event.name,
        desc:     event.desc,
      };
    });

    res.json(eventData);
  }
  catch (error) {
    console.error('Error fetching events: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

/*
Method to get the dates for an event
Parameters:
    eventId:   number, containing the id of the event in question
Returns:
   an array of eventDate objects (array)
*/
async function getEventsById(req, res) {
  const eventId = req.params.eventId;
  
  try {
    const eventDetails = await EventDetails.find({ eventId: eventId });
    res.json(eventDetails);
  }
  catch (error) {
    console.error('Error fetching events: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

/*
Method get all events that a user has over a month
Parameters:
    userId:   number, containing the id of the user in question
    year:     the year to get events from
    month     the month to get events from
Returns:
    eventsForDate, an object containing three properties:
      month:  the month that the event is
      date:   the date in the month that the event is
      name:   the name of the event
*/
async function getEventsForMonth(req, res) {
  const { userId, year, month } = req.params;

  try {
    const targetYear = parseInt(year);
    const targetMonth = parseInt(month);
    const id = parseInt(userId); 

    // Events that the user is participant in
    const userEvents = await EventDetails.find({ part: id });
    const eventsForTargetMonth = [];

    // Get the id, name, start and end dates
    const combinedInfo = userEvents.map(async (event) => {
      const { eventId, name } = event;
      const eventDates = await EventDates.find({ eventId: eventId });
      
      return eventDates.map((occasion) => ({
        eventId,
        name,
        dateRange: occasion,
      }));
    });

    Promise.all(combinedInfo)
      .then((results) => {
        // Iterate over each day of the target month
        for (let currentDate = new Date(targetYear, targetMonth - 1, 1, 0); currentDate <= new Date(targetYear, targetMonth, 0, 0); currentDate.setDate(currentDate.getDate() + 1)) {
          // Iterate over each event
          for (let i = 0; i < results.length; i++)
          {
            // Iterate over each occasion of each event
            for (let j = 0; j < results[i].length; j++) {
              const start = new Date(results[i][j].dateRange.start);
              const end = new Date(results[i][j].dateRange.end);        

              const dateEnd = new Date(currentDate);
              dateEnd.setTime(currentDate.getTime() + 86399999) // +24 hours

              if (dateEnd >= start && currentDate <= end )
              {
                eventsForTargetMonth.push({month: currentDate.getMonth(), date: currentDate.getDate(), name: results[i][j].name});
                console.log("Added: " + currentDate);         // Log in server
              } 
            }
          }
        }

        res.json(eventsForTargetMonth);
      })
      .catch((error) => {
        console.error('Error fetching event dates: ', error);
        res.status(500).json({ error: 'Internal server error' });
      });
  }
  catch (error) {
    console.error('Error fetching events for month: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = { getEventForUser, getEventDatesById, getEventsForMonth, getEventIDNForDate, getEventsById };