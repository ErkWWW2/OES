import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import { useEventContext } from '../../../../../controllers/EventController';
import { useUserContext } from '../../../../../controllers/UserController';
import axios from 'axios';
import './Calendar.css';

function CalendarComponent({ selectedDate, setSelectedDate }) {
  const eventController = useEventContext();  // Get event context
  const userController = useUserContext();    // Get user context

  const userId = userController.logUser;
  const [userEvents, setUserEvents] = useState([]);

  useEffect(() => {
    // GET HTTP request to /api/events/:userId
    axios.get(`/api/events/${userId}`)
      .then(response => {
        setUserEvents(response.data.events);
      })
      .catch(error => {
        console.error('Error fetching user events: ', error);
      });
  }, []); // Use empty dependency array
    

  // Get Events
  const events = {};
    eventController.eventDates.forEach(eventDate => {
        if (!events[eventDate.eventId]) {
            events[eventDate.eventId] = [];
        }

        events[eventDate.eventId].push(eventDate);
    })

  return (
    <div className='calendarContainer'>
      <Calendar 
        onChange={setSelectedDate} // Change state 
        value={selectedDate}       // Value to send to state
        tileContent={({ date, view }) => {
          if (view === 'month') {
            const idArray = eventController.getEventIdsForDate(date); // Get events on date

            // Map eventsId that the user has permisson to view
            if (idArray) {
              return(
                <div>
                  {idArray.filter(id => eventController.getEventById(id).part.includes(userController.logUser)).map(id => (
                    <div className='calEvent'>
                      {eventController.getNameById(id)}
                    </div>
                  ))}
                </div>
              );
            }
            else
              return;
          }
        }}
      />
    </div>
  );
}

export default CalendarComponent;