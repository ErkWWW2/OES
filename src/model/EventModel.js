//Model for events
const EventModel = {
  eventDates: [], // Array for event dates with date, event id, and time
  eventDetails: [], // Array for event details with event id, event name, and event description

  fetchEvents: () => {
    // Populate eventDates and eventDetails arrays
    EventModel.eventDates = [
      { date: new Date(2023, 8, 15, 0, 0), start: new Date(2023, 8, 15, 9, 0), end: new Date(2023, 8, 15, 11, 0), eventId: 1, votes: 0, voters: [''] },
      { date: new Date(2023, 8, 20, 0, 0), start: new Date(2023, 8, 20, 9, 0), end: new Date(2023, 8, 20, 11, 0), eventId: 1, votes: 0, voters: [''] },
      { date: new Date(2023, 9, 7, 0, 0), start: new Date(2023, 9, 7, 9, 0), end: new Date(2023, 9, 7, 11, 0), eventId: 2, votes: 0, voters: [''] },
    ];

    EventModel.eventDetails = [
      { eventId: 1, name: 'Event 1', description: 'This event is for testing events the same event on multiple dates', participants: [''], organizers: [''] },
      { eventId: 2, name: 'Event 2', description: 'This event is for testing events', participants: [''], organizers: [''] }
    ];
  },

  addVote(eventId, date, userId) {
    // Get the event in question (at the correct date)
    let event = EventModel.eventDates.find(eventDate => {
      return (
        eventDate.eventId === eventId &&
        eventDate.date === date
      );
    } );

    console.log(event);

    // Find if the user is in the list of voters
    if (event.voters.find(user => { return (user.userId === userId); })) {

    }
    else  // If the user has not voted on this event before
    {
      event.votes++;                              // Increase the number of votes
      event.voters[event.voters.length] = userId; // Add user to the voters
    }
  },

  remVote(eventId, date, userId) {
    // Get the event in question (at the correct date)
    let event = EventModel.eventDates.find(eventDate => {
      return (
        eventDate.eventId === eventId &&
        eventDate.date === date
      );
    } );

    console.log(event);

    // Find if the user is in the list of voters
    if (event.voters.find(user => { return (user.userId === userId); })) { 
      event.votes--;  // Decrease the number of votes
      
      let index = event.voters.indexOf(userId);
      let prev = index + 1;
      
      // Move the voters after this user forward to remove this one from the list
      for (let i = index; i < event.voters.length - 1; i++) // Stop after swapping the last two
      {
        event.voters[index] = event.voters[prev];
      }
      
    }
  },
};

export default EventModel;