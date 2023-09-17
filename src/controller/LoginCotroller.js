// controllers/LoginController.js
import React, { useState } from 'react';
import LoginForm from '/Users/sami/Documents/ONSHUDLEE/OES/src/view/LoginView.js';
import { validateForm } from '/Users/sami/Documents/ONSHUDLEE/OES/src/model/LoginModel.js';

function LoginController() {
    const [errors, setErrors] = useState({});
  
    const handleSubmit = (name, email) => {
      const validationErrors = validateForm(name, email);
      setErrors(validationErrors);
      if (Object.keys(validationErrors).length === 0) {
        alert("Form is valid. Submitting...");
      }
    };
  
    return (
      <div className="App">
        <LoginForm onSubmit={handleSubmit} errors={errors} />
      </div>
    );
  }
export default LoginController;

