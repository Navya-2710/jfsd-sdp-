import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Register.css'; // Add any styling for the register page

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async (role) => {
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/api/auth/register', {
        username,
        email,
        password,
        role,
      });

      if (response.status === 200) {
        if (role === 'student') {
          navigate('/student'); // Navigate to student dashboard
        } else {
          navigate('/admin'); // Navigate to admin dashboard
        }
      }
    } catch (error) {
      console.error('Registration failed', error);
      alert('Registration failed');
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h1>Register</h1>
        <form>
          <input 
            type="text" 
            placeholder="Username" 
            className="register-input" 
            required 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input 
            type="email" 
            placeholder="Email" 
            className="register-input" 
            required 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="register-input" 
            required 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input 
            type="password" 
            placeholder="Confirm Password" 
            className="register-input" 
            required 
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <div className="register-buttons">
            <button 
              type="button" 
              className="register-btn student-btn" 
              onClick={() => handleRegister('student')}
            >
              Register as Student
            </button>
            <button 
              type="button" 
              className="register-btn admin-btn" 
              onClick={() => handleRegister('admin')}
            >
              Register as Admin
            </button>
          </div>
        </form>
        <p>
          Already have an account? 
          <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
