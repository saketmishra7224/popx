import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./account-setting.css";

const Account = () => {
  // Default user data
  const defaultUser = {
    name: "Lorem Ipsum",
    email: "lorem.ipsum@example.com"
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

  // Generate lorem ipsum text of about 40 words
  const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.";

  return (
    <div className="page account-page">
      <div className="header">
        <h1>Account</h1>
        <Link to="/" className="logout-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
            <polyline points="16 17 21 12 16 7"/>
            <line x1="21" y1="12" x2="9" y2="12"/>
          </svg>
        </Link>
      </div>
      
      <div className="account-container">
        <div className="profile-section">
          <div className="profile-image-container">
            <div className="profile-image">
              <span>{user.name ? user.name.split(' ').map(n => n[0]).join('') : 'U'}</span>
            </div>
            <button className="edit-profile">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
        
        <div className="account-details">
          <div className="detail-card">
            <div className="lorem-ipsum">
              <p>{loremIpsum}</p>
            </div>
          </div>
        </div>
        
        <div className="app-navigation">
          <Link to="/" className="nav-item active">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            <span>Home</span>
          </Link>
          <Link to="/account" className="nav-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
            <span>Account</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Account;
