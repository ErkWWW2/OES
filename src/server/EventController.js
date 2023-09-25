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

  const createEvent = (name, desc, part, org, start, end) => {
    let eventId = eventDetails.length + 1;
    const newEventDetails = { eventId, name, desc, part, org };
    setEventDetails((prevEventDetails) => [...prevEventDetails, newEventDetails]);

    /*
    // Functionality for selecting multiple options for dates
    var dateArray = [];  
    let index = 0
    var currDate = new Date(start.getFullYear(), start.getMonth(), start.getDate());

    while (currDate <= end) {
      console.log(currDate);
      dateArray[index] = currDate;
      index++;
      currDate.setDate(currDate.getDate() + 1);
    }

    for (let i = 0; i < dateArray.length; i++) {
      let newEventDate = { start, end, eventId, votes, voters };
      setEventDates((prevEventDate) => [...prevEventDate, newEventDate]);
    }
    */

    let newEventDate = { start, end, eventId, votes, voters };
    setEventDates((prevEventDate) => [...prevEventDate, newEventDate]);
  };

  const getEventById = (id) => {
    return eventDetails.find((event) => event.eventId === id);
  };

  const getDatesForEvent = (id) => {
    return (eventDates.filter((event) => event.eventId === id));
  }

  return (
      <EventContext.Provider value={{ eventDetails, eventDates, createEvent, getEventById, getDatesForEvent }}>
            {children}
      </EventContext.Provider>
  );
}

export function useEventContext() {
  return useContext(EventContext);
}