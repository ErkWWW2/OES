// RegistrationPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RegistrationForm from "../components/login/LoginCreateAccount";
import { validateForm } from "../model/LoginModel";

function RegistrationPage() {
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (name, email, password) => {
    const validationErrors = validateForm(name, email, password);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // Send registration data to your backend (API request)
      // After successful registration, you can redirect to a login page or dashboard
      // For now, let's navigate to the login page as an example
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
