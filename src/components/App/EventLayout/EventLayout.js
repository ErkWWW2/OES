import React, { useEffect, useState } from 'react';
import Sidebar from '../CalendarSidebar'; // Import the Sidebar component
import EventComponent from './EventView/EventView'; // Import the Calendar component
import './EventLayout.css'

function EventLayout() {

  return (
    <div className="layout">
      <Sidebar />
      <EventComponent />
    </div>
  );
}

export default EventLayout;