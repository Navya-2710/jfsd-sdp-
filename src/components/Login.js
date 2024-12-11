import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css'; // Add any styling for the login page

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (role) => {
    try {
      const response = await axios.post('http://localhost:8080/api/auth/login', {
        username,
        password,
      });

      if (response.status === 200) {
        if (role === 'student') {
          navigate('/student'); // Navigate to student dashboard
        } else {
          navigate('/admin'); // Navigate to admin dashboard
        }
      }
    } catch (error) {
      console.error('Login failed', error);
      alert('Invalid username or password');
    }
  };

  const handleRegister = () => {
    navigate('/register'); // Navigate to the registration page
  };

  const handleForgotPassword = () => {
    navigate('/forgot-password'); // Navigate to forgot password page
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Login</h1>
        <form>
          <input
            type="text"
            placeholder="Username"
            className="login-input"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="login-input"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="login-buttons">
            <button
              type="button"
              className="login-btn student-btn"
              onClick={() => handleLogin('student')}
            >
              Login as Student
            </button>
            <button
              type="button"
              className="login-btn admin-btn"
              onClick={() => handleLogin('admin')}
            >
              Login as Admin
            </button>
          </div>
        </form>
        <div className="login-footer">
          <button
            className="forgot-password-btn"
            onClick={handleForgotPassword}
          >
            Forgot Password?
          </button>
          <p className="register-text">
            Don't have an account?{' '}
            <span className="register-link" onClick={handleRegister}>
              Register
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
