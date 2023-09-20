// RegistrationForm.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import AnimatedText from "../Animated.js";

function RegistrationForm({ onSubmit, errors }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name, email, password);
  };

  return (
    <div className="container">
      <div classNmae="left">
        <h1 className="Header">Register</h1>
        <div className="formWrapper">
          <form onSubmit={handleSubmit}>
            <div className="formGroup">
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input"
                placeholder="Enter your name"
              />
            </div>
            {errors.name && <div className="error">{errors.name}</div>}

            <div className="formGroup">
              <input
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input"
                placeholder="Enter your email"
              />
            </div>
            {errors.email && <div className="error">{errors.email}</div>}

            <div className="formGroup">
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input"
                placeholder="Enter your password"
              />
            </div>
            {errors.password && <div className="error">{errors.password}</div>}

            <input type="submit" value="Register" className="submitButton" />
          </form>
        </div>

        <p className="create-account">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>

      <div className="right">
        <AnimatedText
          className="rightText"
          text="UUnlock a world of possibilities"
        />
      </div>
    </div>
  );
}

export default RegistrationForm;
