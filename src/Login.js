import React, { useState } from "react";
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
      
      // Store basic user data in localStorage
      // In a real app, we would fetch the user's data from a server
      localStorage.setItem('popxUserData', JSON.stringify({
        name: "Marry Doe", // Default name to match account page
        email: formData.email
      }));
      
      // Navigate to account page after successful login
      window.location.href = "/account";
    }
  };

  return (
    <div className="page login-page">
      <div className="login-container">
        <div className="login-content">
          <div className="login-header">
            <h1>Signin to your<br/>PopX account</h1>
            <p>Lorem ipsum dolor sit amet,<br/>consectetur adipiscing elit.</p>
          </div>
          
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-control">
              <label htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email address" 
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
                placeholder="Enter password" 
                required 
              />
            </div>
            
            <button 
              type="submit" 
              className={`login-button ${!isValid ? 'disabled' : ''}`}
              disabled={!isValid}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
