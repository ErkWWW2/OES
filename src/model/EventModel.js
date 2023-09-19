//Model for events
const EventModel = {
    /*
   events: [],
  
    fetchEvents: () => {
      EventModel.events = [
        { date: '2023-09-15', title: 'Event 1' },
        { date: '2023-09-20', title: 'Event 2' }
      ];
    },
  
    getEventsForDate: (date) => {
      const dateStr = date.toISOString().split('T')[0];
      return EventModel.events.filter(event => event.date === dateStr);
    },
    */
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
      { eventId: 1, name: 'Event 1', description: 'This event is for testing events the same event on multiple dates' },
      { eventId: 2, name: 'Event 2', description: 'This event is for testing events', participants: [''], creator: '' }
    ];
  },

  getEventNumber: () => {
    return 2;
  },

  getEventIdsFromDate: (date) => {
    for (let i = 0; i < 2; i++) {
      console.log(EventModel.eventDates[i]);
    }
    console.log(EventModel.eventDates
      .filter(eventDate => eventDate.date === date)
      .map(eventDate => eventDate.eventId));
    return EventModel.eventDates
        .filter(eventDate => eventDate.date === date)
        .map(eventDate => eventDate.eventId);

  },

  getEventName: (eventId) => {
    return EventModel.eventDetails.find(event => event.eventId === eventId).name;
  },
};

export default EventModel;