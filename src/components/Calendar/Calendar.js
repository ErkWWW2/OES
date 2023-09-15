import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import Time from './Time.js';
import './Calendar.css';
import EventController from '../../controller/EventController.js';

function CalendarComponent({ selectedDate, setSelectedDate}) {
  const [showTime, setShowTime] = useState(false);
  const [selectedDateEvents, setSelectedDateEvents] = useState([]);

  useEffect(() => {
    // Fetch events using the controller when the component mounts
    EventController.fetchEvents();
  });

  useEffect(() => {
    // Get events for the selected date
    const events = EventController.getEventsForDate(selectedDate);
    setSelectedDateEvents(events);

    // Update the selected date in the parent component
    setSelectedDate(selectedDate);
  }, [selectedDate, setSelectedDate]);

  return (
    <div className='calendarContainer'>

      <Time />
      <Calendar 
        onChange={setSelectedDate} 
        value={selectedDate} 
        onClickDay={() => setShowTime(true)} 
        tileContent={({ date, view }) => {
          if (view === 'month') {
            const events = EventController.getEventsForDate(date);
            return events.length > 0 && <div className="event-indicator" />;
          }
        }}
      />
    </div>
  );
}

export default CalendarComponent;