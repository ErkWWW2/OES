//Model for events
const EventModel = {
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
  /*
  eventDates: [], // Array for event dates with date, event id, and time
  eventDetails: [], // Array for event details with event id, event name, and event description

  fetchEvents: () => {
    // Populate eventDates and eventDetails arrays
    EventModel.eventDates = [
      { start: new Date(2023, 8, 15, 9, 0), end: new Date(2023, 8, 15, 11, 0), eventId: 1, votes: 0, voters: [''] },
      { start: new Date(2023, 8, 20, 9, 0), end: new Date(2023, 8, 20, 11, 0), eventId: 1, votes: 0, voters: [''] },
      { start: new Date(2023, 9, 7, 9, 0), end: new Date(2023, 9, 7, 11, 0), eventId: 2, votes: 0, voters: [''] },
    ];

    EventModel.eventDetails = [
      { eventId: 1, name: 'Event 1', description: 'This event is for testing events the same event on multiple dates' },
      { eventId: 2, name: 'Event 2', description: 'This event is for testing events', participants: [''], creator: '' }
    ];
  },

  getEventsFromDate: (date) => {
    const dateStr = date.toISOString().split('T')[0];
    return EventModel.eventDates.filter(eventDate => eventDate.date === dateStr);
  },

  getEventDetails: (eventId) => {
    return EventModel.eventDetails.find(eventDetail => eventDetail.eventId === eventId);
  }
  */
};

export default EventModel;