const { mockDetails, mockDates } = require('../model/mockDB'); // Import mock events data

function getEventForUser(req, res)
{
    const userId = req.params.userId;   // Get userId from parameters in the request

    // Get events from the mock database
    const userEvents = mockDetails.filter(event => event.part.includes(parseInt(userId)));

    console.log(userEvents);            // Log in server
    res.json({ events: userEvents });   // Send response to client
}
  
async function getEventDatesById(req, res) {
    const eventId = req.params.eventId;
    const eventDates = mockDates.filter(date => date.eventId === parseInt(eventId));
    res.json(eventDates);
}

function getEventsForMonth(req, res) {
  const { userId, year, month } = req.params;

  const targetYear = parseInt(year);
  const targetMonth = parseInt(month);
  const id = parseInt(userId); 

  // Events that the user is participant in
  const userEvents = mockDetails.filter((event) => event.part.includes(id));
  const eventsForTargetMonth = [];

  // Get the id, name, start and end dates
  const combinedInfo = userEvents.map((event) => {
    const { eventId, name } = event;
    const eventDates = mockDates
      .filter((date) => date.eventId === eventId)
      .map((date) => ({start: date.start, end: date.end}));
    
    return eventDates.map((occasion) => ({
      eventId,
      name,
      dateRange: occasion,
    }));
  });

  // Iterate over each day of the target month
  for (let currentDate = new Date(targetYear, targetMonth - 1, 1, 0); currentDate <= new Date(targetYear, targetMonth, 0, 0); currentDate.setDate(currentDate.getDate() + 1)) {
    // Iterate over each event
    for (let i = 0; i < combinedInfo.length; i++)
    {
      // Iterate over each occasion of each event
      for (let j = 0; j < combinedInfo[i].length; j++) {
        const start = new Date(combinedInfo[i][j].dateRange.start);
        const end = new Date(combinedInfo[i][j].dateRange.end);        

        const dateEnd = new Date(currentDate);
        dateEnd.setTime(currentDate.getTime() + 86399999) // +24 hours

        if (dateEnd >= start && currentDate <= end )
        {
          eventsForTargetMonth.push({month: currentDate.getMonth(), date: currentDate.getDate(), name: combinedInfo[i][j].name});
          console.log("Added: " + currentDate);
        } 
      }
    }
  }

  res.json(eventsForTargetMonth);
}

module.exports = { getEventForUser, getEventDatesById, getEventsForMonth };