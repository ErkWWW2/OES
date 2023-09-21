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
    <div className="Logincontainer">
      <div classNmae="Loginleft">
        <h1 className="LoginHeader">Register</h1>
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
            {errors.name && <div className="Loginerror">{errors.name}</div>}

            <div className="LoginformGroup">
              <input
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="Logininput"
                placeholder="Enter your email"
              />
            </div>
            {errors.email && <div className="Loginerror">{errors.email}</div>}

            <div className="LoginformGroup">
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="Logininput"
                placeholder="Enter your password"
              />
            </div>
            {errors.password && <div className="Loginerror">{errors.password}</div>}

            <input type="submit" value="Register" className="LoginsubmitButton" />
          </form>
        </div>

        <p className="create-account">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>

      <div className="Loginright">
        <AnimatedText
          className="rightText"
          text="UUnlock a world of possibilities"
        />
      </div>
    </div>
  );
}

export default RegistrationForm;
