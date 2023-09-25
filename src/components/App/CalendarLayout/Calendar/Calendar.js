import React from 'react';
import Calendar from 'react-calendar';
import { useEventContext } from '../../../../server/EventController';
import './Calendar.css';
import { useUserContext } from '../../../../server/UserController';

function CalendarComponent({ selectedDate, setSelectedDate }) {
  const eventController = useEventContext();
  const userController = useUserContext();

  return (
    <div className='calendarContainer'>
      <Calendar 
        onChange={setSelectedDate} 
        value={selectedDate}
        tileContent={({ date, view }) => {
          if (view === 'month') {
            const id = eventController.getEventIdForDate(date);
            const name = id ? eventController.getNameById(id): '';

            if (id) {
              return(
                <div className='calEvent'>
                  <p>{name}</p>
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