import React, { useEffect } from 'react';
import Calendar from 'react-calendar';
import EventController from '../../../controller/EventController.js';
import './Calendar.css';

function CalendarComponent({ selectedDate, setSelectedDate }) {

  useEffect(() => {
    EventController.fetchEvents();
    const events = EventController.getEventsForDate(selectedDate);
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
            const events = EventController.getEventsForDate(date);
            return events.length > 0 && <div className='event-indicator' />;
          }
        }}
      />
    </div>
  );
}

export default CalendarComponent;