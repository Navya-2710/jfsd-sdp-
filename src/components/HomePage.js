// src/components/HomePage.js
import { useNavigate } from 'react-router-dom';
import './HomePage.css'; // Import the stylesheet
import './aboutus.jpg';

// If the image is placed inside the 'public' folder, use the image path directly
// If you place the image in the 'src' folder, import it like this:
// import aboutusImage from '../assets/aboutus.jpg'; 

const HomePage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/login'); // Navigate to the login page
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to the Student Achievement Tracker</h1>
          <p>Your platform to manage and showcase your extracurricular achievements.</p>
          <button className="get-started-btn" onClick={handleGetStarted}>Get Started</button>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-section">
        <div className="about-content">
          <div className="about-left">
            {/* Ensure the correct path to the image */}
            <img src="/aboutus.jpg" alt="About Us" className="aboutus" />
          </div>
          <div className="about-right">
            <h2>About Us</h2>
            <p>
              We are dedicated to providing a comprehensive platform for students to track and manage their extracurricular achievements.
              Our mission is to help students showcase their growth beyond academics, enabling them to stand out in both educational
              and professional pursuits.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="contact-section">
        <h2>Contact Us</h2>
        <div className="contact-cards">
          <div className="contact-card">
            <h3>Email</h3>
            <p>support@achievementtracker.com</p>
          </div>
          <div className="contact-card">
            <h3>Phone</h3>
            <p>+1 (123) 456-7890</p>
          </div>
          <div className="contact-card">
            <h3>Address</h3>
            <p>123 Education St, Knowledge City, 4567</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
