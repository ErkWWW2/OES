import { useState, createContext, useContext } from 'react';
import EventDateModel from '../client/model/EventDateModel';
import EventDetailsModel from '../client/model/EventDetailsModel';

// Create context
const EventContext = createContext();

export function EventController({children}) {
  const [eventDates, setEventDates] = useState(EventDateModel);
  const [eventDetails, setEventDetails] = useState(EventDetailsModel);

  const votes = 0;
  const voters = [];

  // Function for creating a new event 
  // Name: string for the name of the event
  // Desc: string of text describing the event
  // Part: List of participant id's
  // Org: List of organizer id's
  // Start: Start date and time as a Date
  // End: Start date and time as a Date
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

  // Function that returns the EventDetails of an event
  // Id: the event id as a Number
  const getEventById = (id) => {
    return (eventDetails.find((event) => event.eventId === id));
  };

  // Function that returns the EventDetes of an event
  // Id: the event id as a Number
  const getDatesForEvent = (id) => {
    return (eventDates.filter((event) => event.eventId === id));
  }

  // Function that returns an array of event ids
  // Date: the date of interest
  // Returns: an array of ids
  const getEventIdsForDate = (date) => {
    const array = [];

    for (let i = 0; i < eventDates.length; i++)
    {
      const start = new Date(eventDates[i].start);
      const end = new Date(eventDates[i].end);
      
      const dateEnd = new Date(date);
      dateEnd.setTime(date.getTime() + 86399999) // +24 hours

      if (dateEnd >= start && date <= end )
      {
        array.push(eventDates[i].eventId);
      } 
    }

    return array;
  }

  // Function that returns the name of an event
  // Id: The id of the event
  // Returns: The name of the event as a string
  const getNameById = (id) => {
    return(eventDetails.find((event) => event.eventId === id).name);
  }

  const getDescById = (id) => {
    return(eventDetails.find((event) => event.eventId === id).desc);
  }

  const getVotesById = (id) => {
    return(eventDates.find((event) => event.eventId === id).votes);
  }

  return (
      <EventContext.Provider value={{ eventDetails, eventDates, createEvent, getEventById, getDatesForEvent, getEventIdsForDate, getNameById, getDescById, getVotesById }}>
            {children}
      </EventContext.Provider>
  );
}

export function useEventContext() {
  return useContext(EventContext);
}