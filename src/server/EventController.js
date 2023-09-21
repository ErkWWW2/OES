import { useState, createContext, useContext } from 'react';
import EventDateModel from '../model/EventDateModel';
import EventDetailsModel from '../model/EventDetailsModel';

// Create context
const EventContext = createContext();

export function EventController({children}) {
  const [eventDates, setEventDates] = useState(EventDateModel);
  const [eventDetails, setEventDetails] = useState(EventDetailsModel);

  const votes = 0;
  const voters = [];

  const createEvent = (name, desc, part, org, date, start, end) => {
    let id = eventDetails.length + 1;
    const newEventDetails = { id, name, desc, part, org };
    setEventDetails((prevEventDetails) => [...prevEventDetails, newEventDetails]);


    var dateArray = [];  
    var currentDate = start;
    while (currentDate <= end) {
      dateArray.push(new Date(currentDate));
      currentDate = currentDate.addDays(1);
    }

    for (let i = 0; i < dateArray.length; i++) {
      date = dateArray[i];
      const newEventDate = {date, start, end, id, votes, voters};
      setEventDates((prevEventDates) => [...prevEventDates, newEventDate]);
    }
  };

  // Helper function for adding multiple dates using dateArray
  Date.Prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  }

  const getEventsById = (id) => {
    return eventDetails.find((event) => event.eventId === id);
  };

  const getDatesForEvent = (id) => {
    return (eventDates.filter((event) => event.eventId === id));
  }

  return (
      <EventContext.Provider value={{ eventDetails, eventDates }}>
            {children}
      </EventContext.Provider>
  );
}

export function useEventContext() {
  return useContext(EventContext);
}