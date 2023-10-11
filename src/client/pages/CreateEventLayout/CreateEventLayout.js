import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import CreateEventForm from './CreateEventView/CreateEventView';
import { useUserContext } from '../../../controllers/UserController';
import logo from './return.png';
import './CreateEventLayout.css'

function CreateEventLayout() {
  const [errors, setErrors] = useState({});
  const userController = useUserContext();
  const users = userController.users;

  return (
    <div className="layout">
      <Link className="returnButton" to='/events'>
        <img src={logo}></img>
      </Link>
      <CreateEventForm errors={errors} users={users} setErrors={setErrors} />
    </div>
  );
}

export default CreateEventLayout;