import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/login/LoginView.js';
import UserModel from '../model/UserModel'; // Replace with the actual path

function LoginController() {
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const userModel = new UserModel(); // Create an instance of UserModel

  const handleSubmit = (name, password) => {


    // if (Object.keys(validationErrors).length === 0) {
    // Attempt to find the user by username and password
    const user = userModel.users.find(
      (u) => u.username === name && u.password === password
    );

    if (user) {
      // User exists, navigate to the appropriate page (e.g., '/calendar')
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
