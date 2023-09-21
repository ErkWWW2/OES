import React from 'react';
import Sidebar from '../CalendarSidebar'; // Import the Sidebar component
import EventComponent from './EventView/EventView'; // Import the Calendar component
import './EventLayout.css'

function EventLayout() {

  return (
    <div className="layout">
      <Sidebar currentView={EventLayout}/>
      <EventComponent />
    </div>
  );
}

export default EventLayout;