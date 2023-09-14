import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import Time from './Time.js';
import './CalendarStyles.css';
import EventController from '../../controller/EventController.js';

function CalendarComponent() {
  const [date, setDate] = useState(new Date());
  const [showTime, setShowTime] = useState(false);
  const [selectedDateEvents, setSelectedDateEvents] = useState([]);

  useEffect(() => {
    // Fetch events using the controller when the component mounts
    EventController.fetchEvents();
  });

  useEffect(() => {
    // Get events for the selected date
    const events = EventController.getEventsForDate(date);
    setSelectedDateEvents(events);
  }, [date]);

  return (
    <div className='calendarContainer'>

      <Time />
      <Calendar 
        onChange={setDate} 
        value={date} 
        onClickDay={() => setShowTime(true)} 
        tileContent={({ date, view }) => {
          if (view === 'month') {
            const events = EventController.getEventsForDate(date);
            return events.length > 0 && <div className="event-indicator" />;
          }
        }}
          />
      {date.length > 0 ? (
        // Displays multiple select dates
        <p>
          <span>Start:</span>
          {date[0].toDateString()}
          &nbsp;
          &nbsp;
          <span>End:</span>{date[1].toDateString()}
        </p>
      ) : (
        // Displays the selected date
        <p className='selDate'>
          <span>Selected date:</span> {date.toDateString()} 
        </p>
      )}
    </div>
  );
}

export default CalendarComponent;