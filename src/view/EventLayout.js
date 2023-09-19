import React, { useEffect, useState } from 'react';
import Sidebar from '../view/components/Calendar/CalendarSidebar'; // Import the Sidebar component
import EventComponent from '../view/components/Calendar/EventView'; // Import the Calendar component
import './CalendarLayout.css'; // Import the CSS for your layout

function EventLayout() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="layout">
      <Sidebar selectedDate={date} />
      <EventComponent />
    </div>
  );
}

export default EventLayout;