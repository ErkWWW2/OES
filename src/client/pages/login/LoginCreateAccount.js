// RegistrationForm.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import AnimatedText from "../Animated.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { validateForm } from "../../model/LoginModel";

function RegistrationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleSubmit =async (e) => {
    const validationErrors = validateForm(name, email, password);
    setErrors(validationErrors);
    e.preventDefault();

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axios.post(`/login/register/${name}/${email}/${password}`, { name,email, password });

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
    console.log(errors.name);
  };

  
 

  return (
    <div className="Logincontainer">
      <div className="Loginleft">
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

        <p className="create-account" >
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>

      <div className="Loginright">
        <AnimatedText
          className="rightText"
          text="Uunlock a world of possibilities."
        />
      </div>
    </div>
  );
}

export default RegistrationForm;
