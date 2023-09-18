import React, { useState } from 'react';
import Sidebar from './components/Calendar/CalendarSidebar'; // Import the Sidebar component
import Calendar from './components/Calendar/Calendar'; // Import the Calendar component
import './CalendarLayout.css'; // Import the CSS for your layout

function CalendarLayout() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="layout">
      <Sidebar selectedDate={date} />
      <Calendar selectedDate={date} setSelectedDate={setDate}/>
    </div>
  );
}

export default CalendarLayout;