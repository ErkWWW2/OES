import EventModel from '../model/EventModel';

const EventController = {
  fetchEvents: () => {
    EventModel.fetchEvents();
  },

  getEventsForDate: (date) => {
    return EventModel.getEventsForDate(date);
  },
};

export default EventController;