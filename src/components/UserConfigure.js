import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './UserConfigure.css'
import { useUserContext } from '../server/UserController.js'; // Import your UserContext

function ProfilePage() {
  const { getUserById, updateUser, logUser } = useUserContext();
  const user = getUserById(logUser);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: user.username,
    email: user.email,
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update the user's profile with formData
    updateUser(logUser, formData.username, formData.email, formData.password);
    navigate('/calendar');
  };

  return (

    <div className = "pContainer">
    <div className="profile-container">
  <h2 className="profile-heading">Edit Profile</h2>
  <form onSubmit={handleSubmit} className="profile-form">
    <div>
      <label htmlFor="username" className="profile-label">
        Username:
      </label>
      <input
        type="text"
        id="username"
        name="username"
        value={formData.username}
        onChange={handleInputChange}
        className="profile-input"
      />
    </div>
    <div>
      <label htmlFor="email" className="profile-label">
        Email:
      </label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        className="profile-input"
      />
    </div>
    <div>
      <label htmlFor="password" className="profile-label">
        Password:
      </label>
      <input
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        className="profile-input"
      />
    </div>
    <button type="submit" className="profile-button">
      Save Changes
    </button>
  </form>
</div>
</div>
  );
}

export default ProfilePage;
