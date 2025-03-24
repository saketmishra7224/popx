import React, { useState, useEffect } from "react";
import "./account-setting.css";

const Account = () => {
  // Default user data
  const defaultUser = {
    name: "Marry Doe",
    email: "Marry@Gmail.Com"
  };
  
  // State to store user data
  const [user, setUser] = useState(defaultUser);
  
  // Load user data from localStorage on component mount
  useEffect(() => {
    try {
      const storedUserData = localStorage.getItem('popxUserData');
      if (storedUserData) {
        const userData = JSON.parse(storedUserData);
        setUser(userData);
      }
    } catch (error) {
      console.error("Error loading user data from localStorage:", error);
    }
  }, []);

  // Generate lorem ipsum text like the image
  const loremIpsum = "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam";

  return (
    <div className="page account-page">
      <div className="header">
        <h1>Account Settings</h1>
      </div>
      
      <div className="account-container">
        <div className="profile-section">
          <div className="profile-image-container">
            <img 
              src="/marry.jpg"
              alt="Profile" 
              className="profile-photo" 
            />
            <button className="edit-profile">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                <circle cx="12" cy="13" r="4"/>
              </svg>
            </button>
          </div>
          
          <div className="profile-info">
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
        </div>
        
        <div className="divider"></div>
        
        <div className="account-details">
          <div className="detail-card">
            <div className="lorem-ipsum">
              <p>{loremIpsum}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
