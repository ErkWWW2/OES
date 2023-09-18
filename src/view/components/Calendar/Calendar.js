import React, { useEffect } from 'react';
import Calendar from 'react-calendar';
import EventLabel from './EventLabel.js';
import Time from './Time.js';
import './Calendar.css';

function CalendarComponent({ selectedDate, setSelectedDate, getEvents, hasEvents }) {

  useEffect(() => {
    // Update the selected date in the parent component
    setSelectedDate(selectedDate);
  }, [selectedDate, setSelectedDate]);

  return (
    <div className='calendarContainer'>

      <Time />
      <Calendar 
        onChange={setSelectedDate} 
        value={selectedDate}
        tileContent={({ date, view }) => {
          if (view === 'month' && hasEvents(date)) {
            // Render the EventLabel component with event metadata
            return <EventLabel event={ getEvents(date)[0] }/>
          }
        }}
      />
    </div>
  );
}

export default CalendarComponent;