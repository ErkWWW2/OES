import React, { useState } from 'react';
import Sidebar from '../Sidebar/CalendarSidebar'; // Import the Sidebar component
import Calendar from './Calendar/Calendar'; // Import the Calendar component
import './CalendarLayout.css'; // Import the CSS for your layout

function CalendarLayout() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="layout">
      <Sidebar 
        selectedDate={date}
        currentView={CalendarLayout} />
      <Calendar 
        selectedDate={date} 
        setSelectedDate={setDate} />
    </div>
  );
}

export default CalendarLayout;