// src/components/AdminDashboard.js
import React, { useState } from 'react';
import AddAchievement from './AddAchievement';
import UpdateParticipation from './UpdateParticipation';
import Reports from './Reports';
import './AdminDashboard.css';

const AdminDashboard = () => {
  // State to manage which section is selected
  const [selectedSection, setSelectedSection] = useState(null);

  // Function to handle section selection
  const handleSectionSelect = (section) => {
    setSelectedSection(section);
  };

  return (
    <div className="admin-dashboard">
      <div className="sidebar">
        <h2 className="sidebar-title">Admin Dashboard</h2>
        <ul className="sidebar-links">
          <li>
            <button onClick={() => handleSectionSelect('add-achievement')}>Add Achievement</button>
          </li>
          <li>
            <button onClick={() => handleSectionSelect('update-participation')}>Update Participation</button>
          </li>
          <li>
            <button onClick={() => handleSectionSelect('generate-report')}>Generate Reports</button>
          </li>
        </ul>
      </div>

      <div className="main-content">
        <h1>Admin Dashboard</h1>
        <p>Select an option from the sidebar to get started.</p>

        {/* Conditional Rendering based on selected section */}
        {selectedSection === 'add-achievement' && <AddAchievement />}
        {selectedSection === 'update-participation' && <UpdateParticipation />}
        {selectedSection === 'generate-report' && <Reports />}
      </div>
    </div>
  );
};

export default AdminDashboard;



