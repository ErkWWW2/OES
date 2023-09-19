import React, { useEffect, useState } from 'react';
import Sidebar from '../view/components/Calendar/CalendarSidebar'; // Import the Sidebar component
import Calendar from '../view/components/Calendar/Calendar'; // Import the Calendar component
import './CalendarLayout.css'; // Import the CSS for your layout

function CalendarLayout() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="layout">
      <Sidebar selectedDate={date} />
      <Calendar 
        selectedDate={date} 
        setSelectedDate={setDate} />
    </div>
  );
}

export default CalendarLayout;