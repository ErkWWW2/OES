import React, { useState } from 'react';

import './LoginView.css';
import AnimatedText from '../Animated.js';


function LoginForm({ onSubmit, errors }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name, email);
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
              {errors.name && <div className="error">{errors.name}</div>}
            </div>

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
              {errors.email && <div className="error">{errors.email}</div>}
            </div>

            <input type="submit" value="Submit" className="submitButton" />
          </form>
        </div>

        <p className="create-account">Don't have an account? <a href="#">Create one</a></p>
      </div>



      <div className="right">
      <AnimatedText className="rightText" text="EEasy scheduling ahead!" />
      </div>
  </div>

  );
}



export default LoginForm;
