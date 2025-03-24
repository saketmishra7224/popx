import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newFormData = {
      ...formData,
      [name]: value
    };
    
    setFormData(newFormData);
    // Enable button only if both fields have values
    setIsValid(newFormData.email !== "" && newFormData.password !== "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      console.log("Login attempted with:", formData);
      // Navigate to account page after successful login
      window.location.href = "/account";
    }
  };

  return (
    <div className="page login-page">
      <div className="header">
        <Link to="/" className="back-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
        </Link>
        <h1>Sign in to PopX</h1>
      </div>
      
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="welcome-message">
            <h2>Welcome back</h2>
            <p>Sign in to access your PopX account</p>
          </div>
          
          <div className="form-control">
            <label htmlFor="email">Email address</label>
            <input 
              type="email" 
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="johndoe@example.com" 
              required 
            />
          </div>
          
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••" 
              required 
            />
          </div>
          
          <div className="form-action">
            <button 
              type="submit" 
              className={`btn-primary login-button ${!isValid ? 'btn-disabled' : ''}`}
              disabled={!isValid}
            >
              Login
            </button>
            
            <Link to="/signup" className="create-account-link">
              Don't have an account? <span>Create Account</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
