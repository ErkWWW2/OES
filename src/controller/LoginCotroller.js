// controllers/LoginController.js
import React, { useState} from 'react';
import { Link, useNavigate} from "react-router-dom";
import LoginForm from '../view/LoginView.js';
import { validateForm } from '../model/LoginModel.js';

function LoginController() {
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
  
    const handleSubmit = (name, email) => {
      const validationErrors = validateForm(name, email);
      setErrors(validationErrors);

      if (Object.keys(validationErrors).length === 0) {        
        navigate('/calendar');
      }
    };
  
    return (
      <div className="App">
        <LoginForm onSubmit={handleSubmit} errors={errors} />
      </div>
    );
  }
export default LoginController;

