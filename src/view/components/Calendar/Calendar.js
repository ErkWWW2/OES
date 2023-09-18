import React, { useEffect } from 'react';
import Calendar from 'react-calendar';
import EventLabel from './EventLabel.js';
import Time from './Time.js';
import './Calendar.css';

function CalendarComponent({ selectedDate, setSelectedDate, eventDates, eventDetails, hasEvents }) {

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
            // Find event details for the date
            const eventsForDate = eventDates.filter(eventDate => eventDate.date === date.toISOString().split('T')[0]);
        
            // Render the EventLabel component for each event
            return eventsForDate.map(eventDate => {
              const eventDetail = eventDetails.find(detail => detail.eventId === eventDate.eventId);
              if (!eventDetail) {
                return (
                  <EventLabel key={eventDate.eventId} event={{ name: 'Nothing here', starttime: new Date(), endtime: new Date() }} />
                );
              }
        
              return (
                <EventLabel key={eventDate.eventId} event={eventDetail} />
              );
            });
          }
        }}
      />
    </div>
  );
}

export default CalendarComponent;