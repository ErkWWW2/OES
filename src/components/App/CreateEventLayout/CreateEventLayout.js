import React, { useEffect, useState } from 'react';
import Sidebar from '../CalendarSidebar'; // Import the Sidebar component
import CreateEventForm from './CreateEventView/CreateEventView';
import './CreateEventLayout.css'

function CreateEventLayout() {

  return (
    <div className="layout">
      <Sidebar currentView={CreateEventLayout}/>
      <CreateEventForm />
    </div>
  );
}

export default CreateEventLayout;