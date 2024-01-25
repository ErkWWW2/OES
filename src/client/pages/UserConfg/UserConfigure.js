import React, { useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './UserConfigure.css'

function ProfilePage() {
  //const { getUserById, updateUser, logUser } = useUserContext();
  //const user = getUserById(logUser);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [currentUserId, setCurrentUserId] = useState(0);
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    axios.get('/user/getCurrentUserId').then((response) => {
      setCurrentUserId(response.data.currentUserId);
    });
  }, []);

  useEffect(() => {
    axios.get(`/user/getUserById/${currentUserId}`).then((response) => {
      setCurrentUser(response.data.user);
    });
  }, [currentUserId]);


  useEffect(() => {
    if (currentUser) {
      setFormData({
        username: currentUser.username,
        email: currentUser.email,
        password: currentUser.password,
      });
    }
  }, [currentUser]);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
       ...formData,
       [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //// Update the user's profile with formData
    try {
      
      await axios.put(`/user/updateUser/${currentUserId}/${formData.username}/${formData.email}/${formData.password}`);
      console.log('Profile updated successfully');
      navigate('/calendar');
    } catch(error){
      console.log(error);
      navigate('/calendar');
    }
  };

  if (currentUser) {
    return (
      <div className="pContainer">
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

  return null;
}


export default ProfilePage;
