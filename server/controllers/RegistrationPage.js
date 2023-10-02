// RegistrationPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RegistrationForm from "../components/login/LoginCreateAccount";
import { validateForm } from "../model/LoginModel";
import { useUserContext } from './UserController.js';

function RegistrationPage() {
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const userController = useUserContext();  //Access to UserController

  const handleSubmit = (name, email, password) => {
    const validationErrors = validateForm(name, email, password);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      const newUser = {
        username: name,
        password: password,
        email: email,
      };
      userController.addUser(newUser.username, newUser.email, newUser.password);
      console.log(userController.users);
      navigate("/login");
    }
  };

  return (
    <div className="App">
      <RegistrationForm onSubmit={handleSubmit} errors={errors} />
    </div>
  );
}

export default RegistrationPage;
