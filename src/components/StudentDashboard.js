import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './StudentDashboard.css';

const StudentDashboard = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch activities data from the backend
    axios.get('http://localhost:8080/api/extracurricular-activities')
      .then((response) => {
        setActivities(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching activities", error);
        setLoading(false);
      });
  }, []);

  const handleLogout = () => {
    // Clear authentication token (if stored in localStorage)
    localStorage.removeItem('authToken');
    navigate('/login'); // Redirect to login page
  };

  return (
    <div className="student-dashboard">
      <header className="dashboard-header">
        <h1 className="dashboard-title">Student Dashboard</h1>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </header>

      <nav className="dashboard-nav">
        <button onClick={() => navigate('/profile')}>Profile</button>
        <button onClick={() => navigate('/achievements')}>Achievements</button>
        <button onClick={() => navigate('/enrolled-activities')}>Enrolled Activities</button>
        <button onClick={() => navigate('/feedback')}>Feedback</button>
      </nav>

      <main className="dashboard-content">
        <h2>Available Extracurricular Activities</h2>
        {loading ? (
          <div className="loading">Loading activities...</div>
        ) : (
          <div className="activity-grid">
            {activities.length === 0 ? (
              <div className="no-activities">No activities found</div>
            ) : (
              activities.map((activity) => (
                <div className="activity-card" key={activity.id}>
                  <div className="activity-card-img">
                    <img src={`http://localhost:8080/images/${activity.imageUrl}`} alt={activity.name} />
                  </div>
                  <h3 className="activity-title">{activity.name}</h3>
                  <p className="activity-description">{activity.description}</p>
                  <Link to={`/activity/${activity.id}`}>
                    <button className="view-details-btn">View Details</button>
                  </Link>
                </div>
              ))
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default StudentDashboard;
