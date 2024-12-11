import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Student Achievements</div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/student">Dashboard</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/achievements">Achievements</Link></li>
        <li><Link to="/enrolled-activities">Enrolled Activities</Link></li>
        <li><Link to="/feedback">Feedback</Link></li>
        <li><Link to="/login">Logout</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;