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
    <div className="Logincontainer">
      <div className="Loginleft">
        <h1 className="LoginHeader">Login</h1>
        <div className="LoginformWrapper">
          <form onSubmit={handleSubmit}>
            <div className="LoginformGroup">
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="Logininput"
                placeholder="Enter your name"
              />
            </div>
            {errors.name && <div className="error">{errors.name}</div>}

            <div className="LoginformGroup">
              <input
                type="text"
                id="password"
                name="pwassword"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="Logininput"
                placeholder="Enter your password"
              />
            </div>
            {errors.password && <div className="Loginerror">{errors.password}</div>}

            <input type="submit" value="Submit" className="LoginsubmitButton" />
          </form>
        </div>

        <p className="create-account">
          Don't have an account? <Link to="/register">Create one</Link>
        </p>
      </div>

      <div className="Loginright">
        <AnimatedText className="AnimatedText" text="EEasy scheduling ahead!" />
      </div>
    </div>
  );
}

export default LoginForm;
