import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
    isAgency: "yes"
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'radio' ? e.target.value : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    // Navigate to account page after successful signup
    window.location.href = "/account";
  };

  return (
    <div className="page signup-page">
      <div className="header">
        <Link to="/" className="back-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
        </Link>
        <h1>Create your PopX account</h1>
      </div>
      
      <div className="signup-container">
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="fullName">Full Name*</label>
            <input 
              type="text" 
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="John Doe" 
              required 
            />
          </div>

          <div className="form-control">
            <label htmlFor="phoneNumber">Phone number*</label>
            <input 
              type="tel" 
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="+1 9876543210" 
              required 
            />
          </div>

          <div className="form-control">
            <label htmlFor="email">Email address*</label>
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
            <label htmlFor="password">Password*</label>
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

          <div className="form-control">
            <label htmlFor="companyName">Company name</label>
            <input 
              type="text" 
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Acme Inc." 
            />
          </div>

          <div className="form-control radio-group">
            <label>Are you an Agency?*</label>
            <div className="radio-options">
              <label className="radio-label">
                <input 
                  type="radio" 
                  name="isAgency" 
                  value="yes"
                  checked={formData.isAgency === "yes"}
                  onChange={handleChange}
                />
                <span className="radio-custom"></span>
                <span>Yes</span>
              </label>
              <label className="radio-label">
                <input 
                  type="radio" 
                  name="isAgency" 
                  value="no"
                  checked={formData.isAgency === "no"}
                  onChange={handleChange}
                />
                <span className="radio-custom"></span>
                <span>No</span>
              </label>
            </div>
          </div>

          <button type="submit" className="btn-primary signup-button">Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
