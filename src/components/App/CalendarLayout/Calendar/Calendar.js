import React, { useEffect } from 'react';
import Calendar from 'react-calendar';
import { useEventContext } from '../../../../server/EventController';
import './Calendar.css';
import { useUserContext } from '../../../../server/UserController';

function CalendarComponent({ selectedDate, setSelectedDate }) {
  const eventController = useEventContext();
  const userController = useUserContext();
  console.log(userController.logUser);
  return (
    <div className='calendarContainer'>
      <Calendar 
        onChange={setSelectedDate} 
        value={selectedDate}
        tileContent={({ date, view }) => {
          if (view === 'month') {
            /* Event Indicator */
          }
        }}
      />
    </div>
  );
}

export default CalendarComponent;