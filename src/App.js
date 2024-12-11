import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import components for Admin and Student
import HomePage from './components/HomePage'; // Home page
import Login from './components/Login'; // Login page
import Register from './components/Register'; // Register page
import StudentDashboard from './components/StudentDashboard'; // Student dashboard
import Profile from './components/Profile'; // Profile page
import Achievements from './components/Achievements'; // Achievements page
import EnrolledActivities from './components/EnrolledActivities'; // Enrolled activities page
import Feedback from './components/Feedback'; // Feedback page
import ActivityDetail from './components/ActivityDetail'; // Activity detail page

// Import Admin Components
import AdminDashboard from './components/AdminDashboard'; // Admin Dashboard component
import AddAchievement from './components/AddAchievement'; // Add Achievement
import UpdateParticipation from './components/UpdateParticipation'; // Update Participation
import Reports from './components/Reports'; // Reports page

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<HomePage />} />

          {/* Login and Register Pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Student Dashboard and Other Pages */}
          <Route path="/student" element={<StudentDashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/enrolled-activities" element={<EnrolledActivities />} />
          <Route path="/feedback" element={<Feedback />} />
          
          {/* Activity Details */}
          <Route path="/activity/:id" element={<ActivityDetail />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminDashboard />} /> {/* Admin dashboard route */}
          <Route path="/admin/add-achievement" element={<AddAchievement />} /> {/* Add Achievement */}
          <Route path="/admin/update-participation" element={<UpdateParticipation />} /> {/* Update Participation */}
          <Route path="/admin/report" element={<Reports />} /> {/* Generate Reports */}

          {/* Catch-all route for 404 */}
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



