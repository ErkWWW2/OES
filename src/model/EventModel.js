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
  };
  
  export default EventModel;