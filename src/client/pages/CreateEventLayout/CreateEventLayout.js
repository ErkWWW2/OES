import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import CreateEventForm from './CreateEventView/CreateEventView';
import logo from './return.png';
import './CreateEventLayout.css'

function CreateEventLayout() {
  const [errors, setErrors] = useState({});

  return (
    <div className="layout">
      <Link className="returnButton" to='/events'>
        <img src={logo}></img>
      </Link>
      <CreateEventForm errors={errors} setErrors={setErrors} />
    </div>
  );
}

export default CreateEventLayout;