// src/components/Header.js
import { Link } from 'react-router-dom';
import './Header.css'; // Importing the CSS file for styling

const Header = () => {
  return (
    <header className="header-container">
      <div className="logo">
        <Link to="/">Student Achievements</Link>
      </div>
      <nav className="nav-links">
        <ul>
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="/admin" className="nav-link">Admin Dashboard</Link>
          </li>
          <li>
            <Link to="/student" className="nav-link">Student Dashboard</Link>
          </li>
          <li className="dropdown">
            <button className="dropbtn">More</button>
            <div className="dropdown-content">
              <Link to="/about" className="nav-link">About</Link>
              <Link to="/contact" className="nav-link">Contact</Link>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

