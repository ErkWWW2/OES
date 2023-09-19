import EventModel from '../model/EventModel';

const EventController = {
  fetchEvents: () => {
    EventModel.fetchEvents();
  },

  getEvents: () => {
    return EventModel.eventDetails;
  },

  getEventDates: () => {
    return EventModel.eventDates;
  },

  getDateForEvent: (id) => {
    return (EventModel.eventDates.filter(event => event.eventId === id));
  },
};

export default EventController;