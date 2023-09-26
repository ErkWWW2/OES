import React, { useState } from 'react';
import Sidebar from '../Sidebar/CalendarSidebar'; // Import the Sidebar component
import EventComponent from './EventView/EventView'; // Import the Calendar component
import './EventLayout.css'

function EventLayout() {
  // State that handles currently selected event
  const [selEvent, setSelEvent] = useState();

  return (
    <div className="layout">
      <Sidebar currentView={EventLayout} selectedEvent = {selEvent}/>
      <EventComponent setSelectedEvent = {setSelEvent}/>
    </div>
  );
}

export default EventLayout;