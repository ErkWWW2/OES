import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RegistrationForm from "../client/pages/login/LoginCreateAccount";
import { validateForm } from "../client/model/LoginModel";
import { useUserContext } from './UserController.js';
import axios from 'axios'; // Import axios

function RegistrationPage() {
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const userController = useUserContext();

  const handleSubmit = async (username, email, password) => {
    const validationErrors = validateForm(username, email, password);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axios.post('http://localhost:3001/api/register', { username,email, password });

        if (response.status == 201) {
          // If the response indicates success, create the new user
          //console.log(userController.users);

          // Navigate to the login page
          navigate("/login");
        } else {
          // If the response indicates failure, display an error message
          setErrors({ ...errors, password: response.data.message });
        }
      } catch (error) {
        console.error(error.response.data.message);
        // Handle other error cases here, if needed
      }
    }
  };

  return (
    <div className="App">
      <RegistrationForm onSubmit={handleSubmit} errors={errors} />
    </div>
  );
}

export default RegistrationPage;
