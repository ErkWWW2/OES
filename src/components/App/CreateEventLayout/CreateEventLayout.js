import React from 'react';
import { Link } from 'react-router-dom'
import CreateEventForm from './CreateEventView/CreateEventView';
import logo from './return.png';
import './CreateEventLayout.css'

function CreateEventLayout({ onSubmit, errors, users }) {

  return (
    <div className="layout">
      <Link className="returnButton" to='/events'>
        <img src={logo}></img>
      </Link>
      <CreateEventForm onSubmit={onSubmit} errors={errors} users={users} />
    </div>
  );
}

export default CreateEventLayout;