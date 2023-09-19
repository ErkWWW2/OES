import React, { useEffect } from 'react';
import Calendar from 'react-calendar';
import EventController from '../../../../server/EventController';
import './Calendar.css';

function CalendarComponent({ selectedDate, setSelectedDate }) {

  useEffect(() => {
    EventController.fetchEvents();
    // Update the selected date in the parent component
    setSelectedDate(selectedDate);
  }, [selectedDate, setSelectedDate]);

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