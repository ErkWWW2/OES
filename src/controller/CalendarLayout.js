import React, { useEffect, useState } from 'react';
import Sidebar from '../view/components/Calendar/CalendarSidebar'; // Import the Sidebar component
import Calendar from '../view/components/Calendar/Calendar'; // Import the Calendar component
import EventModel from '../model/EventModel'; // Import the Data for the events
import './CalendarLayout.css'; // Import the CSS for your layout

function CalendarLayout() {
  const [date, setDate] = useState(new Date());
  const [eventDates, setEventDates] = useState([] );
  const [eventDetails, setEventDetails] = useState([] );

  useEffect(() => {
    EventModel.fetchEvents();
    setEventDates(EventModel.eventDates);
    setEventDetails(EventModel.eventDetails);
  }, []);

  function hasEventsOnDate(date) {
    const dateStr = date.toISOString().split('T')[0];
    return eventDates.some(eventDate => eventDate.date === dateStr);
  } 

  return (
    <div className="layout">
      <Sidebar selectedDate={date} />
      <Calendar 
        selectedDate={date} 
        setSelectedDate={setDate} 
        eventDates={eventDates}
        eventDetails={eventDetails}  // Pass function as reference
        hasEvents={hasEventsOnDate} />
    </div>
  );
}

export default CalendarLayout;