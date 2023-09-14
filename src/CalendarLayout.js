import React from 'react';
import Sidebar from './components/Calendar/CalendarSidebar'; // Import the Sidebar component
import Calendar from './components/Calendar/Calendar'; // Import the Calendar component
import './CalendarLayout.css'; // Import the CSS for your layout

function Layout() {
  return (
    <div className="layout">
      <Sidebar />
      <Calendar />
    </div>
  );
}

export default Layout;