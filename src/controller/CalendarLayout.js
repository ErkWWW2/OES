import React, { useState } from 'react';
import Sidebar from '../view/components/Calendar/CalendarSidebar'; // Import the Sidebar component
import Calendar from '../view/components/Calendar/Calendar'; // Import the Calendar component
import EventModel from '../model/EventModel'; // Import the Data for the events
import './CalendarLayout.css'; // Import the CSS for your layout

function CalendarLayout() {
  const eventModel = new EventModel();
  const [date, setDate] = useState(new Date());
  const [events, getEvents] = useState([] );

  // Function to reutrn if a date has an event
  function hasEventsOnDate(date) {
    let events = eventModel.getEventsForDate(date);
    return events.length > 0;
  }

  return (
    <div className="layout">
      <Sidebar selectedDate={date} />
      <Calendar 
        selectedDate={date} 
        setSelectedDate={setDate} 
        getEvents={eventModel.getEventsForDate}  // Pass function as reference
        hasEvents={hasEventsOnDate} />
    </div>
  );
}

export default CalendarLayout;