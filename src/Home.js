import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <div className="page home-page">
      <div className="bottom-content">
        <div className="welcome-text">
          <h2>Welcome to PopX</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit</p>
        </div>
        <div className="action-buttons">
          <Link to="/signup" className="btn-primary">Create Account</Link>
          <Link to="/login" className="btn-secondary">Already Registered? Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
