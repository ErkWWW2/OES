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

  getEventsForDate: (date) => {
    return EventModel.getEventIdsFromDate(date);
  },
};

export default EventController;