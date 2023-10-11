import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import { useUserContext } from '../../../../../controllers/UserController';
import axios from 'axios';
import './Calendar.css';

function CalendarComponent({ selectedDate, setSelectedDate }) {
  const userController = useUserContext();    // Get user context

  const [eventsForMonth, setEventsForMonth] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fetchEventsForMonth = async (year, month) => {
    setIsLoading(true);

    try {
      axios
      .get(`/api/events/u/${year}/${month + 1}`)
      .then((response) => {
        const events = response.data;
        setEventsForMonth(events);
      })
      .catch((error) => {
        console.error('Error fetching user events: ', error);
      });
    }
    catch (error) {
      console.error('Error fetching events: ', error);
    }
    finally
    {
      setIsLoading(false);
    }
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
        onActiveStartDateChange={({ activeStartDate }) => {
          fetchEventsForMonth(activeStartDate.getFullYear(), activeStartDate.getMonth());
        }}
        tileContent={({ date, view }) => {
          if (view === 'month')
          {
            // Check if events have loaded and eventsForMonth is defined
            if (!isLoading && eventsForMonth !== undefined) {  
              const eventsForDate = eventsForMonth.filter((item) => (item.date + (31 * item.month)) === (date.getDate() + (31 * date.getMonth())));
              
              if (eventsForDate !== undefined) {
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
}

export default CalendarComponent;