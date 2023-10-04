import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../client/pages/login/LoginView';
import { useUserContext } from './UserController.js';

const LoginController = () => {
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const userController = useUserContext();  //Access to UserController

  const handleSubmit = (name, password) => {

    // if (Object.keys(validationErrors).length === 0) {
    // Attempt to find the user by username and password
    const user = userController.users.find(
      (u) => u.username === name && u.password === password
    );

    if (user) {
      // User exists, navigate to the appropriate page (e.g., '/calendar')
      userController.confLogUser(user.id);
      navigate('/calendar');
    } else {
      // User not found, display an error message
      setErrors({ ...errors, password: 'Invalid username or password' });
    // }
    }
  };

  return (
    <div className="App">
      <LoginForm onSubmit={handleSubmit} errors={errors} />
    </div>
  );
}

export default LoginController;
