// RegistrationPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RegistrationForm from "../components/login/LoginCreateAccount";
import { validateForm } from "../model/LoginModel";
import UserModel from '../model/UserModel';

function RegistrationPage() {
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();


  const handleSubmit = (name, email, password) => {
    const validationErrors = validateForm(name, email, password);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      const userModel = new UserModel();
      const newUser = {
        username: 'newuser',
        password: 'newpassword',
        email: 'newuser@example.com',
      };
      userModel.addUser(newUser);
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
