import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./LoginView.css";
import AnimatedText from "../Animated.js";

function LoginForm({ onSubmit, errors }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name, password);
  };

  return (
    <div className="container">
      <div classNmae="left">
        <h1 className="Header">Login</h1>
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
                id="password"
                name="pwassword"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input"
                placeholder="Enter your password"
              />
            </div>
            {errors.password && <div className="error">{errors.password}</div>}

            <input type="submit" value="Submit" className="submitButton" />
          </form>
        </div>

        <p className="create-account">
          Don't have an account? <Link to="/register">Create one</Link>
        </p>
      </div>

      <div className="right">
        <AnimatedText className="rightText" text="EEasy scheduling ahead!" />
      </div>
    </div>
  );
}

export default LoginForm;
