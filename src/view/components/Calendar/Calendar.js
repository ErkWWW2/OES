import React, { useEffect } from 'react';
import Calendar from 'react-calendar';
import EventLabel from './EventLabel.js';
import EventController from '../../../controller/EventController.js';
import Time from './Time.js';
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

      <Time />
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