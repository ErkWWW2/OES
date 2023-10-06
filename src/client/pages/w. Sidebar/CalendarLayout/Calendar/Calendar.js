import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import { useUserContext } from '../../../../../controllers/UserController';
import axios from 'axios';
import './Calendar.css';

function CalendarComponent({ selectedDate, setSelectedDate }) {
  const userController = useUserContext();    // Get user context

  const userId = userController.logUser;
  const [eventsForMonth, setEventsForMonth] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fetchEventsForMonth = (year, month) => {
    setIsLoading(true);

    axios
      .get(`/api/events/${userId}/${year}/${month + 1}`)
      .then((response) => {
        const events = response.data;

        setEventsForMonth(events);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching user events: ', error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    const currentDate = new Date(selectedDate);
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    fetchEventsForMonth(year, month);
  }, []);
  
  return (
    <div className='calendarContainer'>
      <Calendar
        onChange={setSelectedDate} // Change state
        value={selectedDate} // Value to send to state
        onActiveStartDateChange={({action, activeStartDate, value, view}) => {
          fetchEventsForMonth(activeStartDate.getFullYear(), activeStartDate.getMonth());
        }}
        tileContent={({ date, view }) => {
          if (view === 'month')
          {
            // Check if events have loaded and eventsForMonth is defined
            if (!isLoading && eventsForMonth != undefined) {  
              const eventsForDate = eventsForMonth.filter((item) => (item.date + (31 * item.month)) === (date.getDate() + (31 * date.getMonth())));
              
              if (eventsForDate != undefined) {
                return (
                  <div>
                    {eventsForDate.map((event) => (
                      <div className='calEvent'>
                        {event.name}
                      </div>
                    ))}
                  </div>
                );
              }
              else {
                return(
                  <div />
                );
              }
            }

            // Display a loading indicator while events are loading
            return (
              <div>
                Loading...
              </div>
            );
          }
        }}
      />
    </div>
  );
  
  /*
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
  */
}

export default CalendarComponent;