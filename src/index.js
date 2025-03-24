import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Account from "./Account";
import "./styles.css";

// AnimatedRoutes component with manual animation instead of react-transition-group
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <div className="routes-container">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <AnimatedRoutes />
  </Router>
);
