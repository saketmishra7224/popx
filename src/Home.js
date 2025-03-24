import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <div className="page home-page">
      <div className="home-container">
        <div className="home-content">
          <div className="logo">
            <h1>PopX</h1>
          </div>
          <div className="welcome-text">
            <h2>Welcome to PopX</h2>
            <p>A platform for modern professionals to connect, engage, and grow.</p>
          </div>
          <div className="action-buttons">
            <Link to="/signup" className="btn-primary">Create Account</Link>
            <Link to="/login" className="btn-secondary">Already Registered? Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
