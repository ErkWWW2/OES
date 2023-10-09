import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../client/pages/login/LoginView';
import { useUserContext } from './UserController.js';
import axios from 'axios';

const LoginController = () => {
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const userController = useUserContext();

  const handleSubmit = async (username, password) => {
    try {
      const response = await axios.post('http://localhost:5002/login', { username, password });

      if (response.status == 200) {
        // If the response indicates success, navigate to the appropriate page
        userController.confLogUser(response.data.userId);
        navigate('/calendar');
      } else {
        // If the response indicates failure, display an error message
        setErrors({ ...errors, password: response.data.message });
      }
    } catch (error) {
      console.error(error.response.data.message);
      // Handle other error cases here, if needed
    }
  };

  return (
    <div className="App">
      <LoginForm onSubmit={handleSubmit} errors={errors} />
    </div>
  );
}

export default LoginController;
