import React from 'react';
import SideFooter from './SidebarFooter/SidebarFooter';
import SidebarBody from './SidebarBody/SidebarBody';
import './CalendarSidebar.css';

function Sidebar({ selectedDate, selectedEvent, currentView }) {
  return (
    <div className='sidebar'>
      <SidebarBody className='body' selectedDate={selectedDate} selectedEvent={selectedEvent} currentView={currentView} />
      <SideFooter className='footer' currView={currentView} />
    </div>
  );
}

export default Sidebar;