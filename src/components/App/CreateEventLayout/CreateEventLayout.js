import React from 'react';
import Sidebar from '../CalendarSidebar'; // Import the Sidebar component
import CreateEventForm from './CreateEventView/CreateEventView';
import './CreateEventLayout.css'

function CreateEventLayout({ onSubmit, errors, users }) {

  return (
    <div className="layout">
      <Sidebar currentView={CreateEventLayout}/>
      <CreateEventForm onSubmit={onSubmit} errors={errors} users={users} />
    </div>
  );
}

export default CreateEventLayout;