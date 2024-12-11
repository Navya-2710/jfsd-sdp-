import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ActivityDetail.css';

const ActivityDetail = () => {
  const { id } = useParams(); // Extract activity ID from the URL
  const navigate = useNavigate(); // Initialize navigation
  const [activity, setActivity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState(''); // State for success/error messages

  useEffect(() => {
    // Fetch activity details by ID
    axios
      .get(`http://localhost:8080/api/extracurricular-activities/${id}`)
      .then((response) => {
        setActivity(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching activity details:', error);
        setLoading(false);
      });
  }, [id]);

  const handleEnroll = () => {
    axios
      .post(`http://localhost:8080/api/extracurricular-activities/enroll/${id}`)
      .then(() => {
        setMessage('Successfully enrolled in the event!'); // Set success message
        // Refresh activity details after enrolling
        return axios.get(`http://localhost:8080/api/extracurricular-activities/${id}`);
      })
      .then((response) => setActivity(response.data))
      .catch((error) => {
        console.error('Error enrolling:', error);
        setMessage('Failed to enroll in the event. Please try again.'); // Set error message
      });
  };

  const handleUnenroll = () => {
    axios
      .post(`http://localhost:8080/api/extracurricular-activities/unenroll/${id}`)
      .then(() => {
        setMessage('Successfully unenrolled from the event!'); // Set success message
        // Refresh activity details after unenrolling
        return axios.get(`http://localhost:8080/api/extracurricular-activities/${id}`);
      })
      .then((response) => setActivity(response.data))
      .catch((error) => {
        console.error('Error unenrolling:', error);
        setMessage('Failed to unenroll from the event. Please try again.'); // Set error message
      });
  };

  const handleGoBack = () => navigate('/student'); // Navigate back to the dashboard

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!activity) {
    return <div>No activity found.</div>;
  }

  return (
    <div className="activity-detail">
      <h1>{activity.name}</h1>
      <img
        src={`http://localhost:8080/images/${activity.imageUrl}`}
        alt={activity.name}
        className="activity-image"
      />
      <p>{activity.description}</p>

      {/* Message Section */}
      {message && <div className="message">{message}</div>}

      {/* Achievements and Participation Details */}
      <h2>Achievements</h2>
      {activity.achievements?.length > 0 ? (
        <ul>
          {activity.achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      ) : (
        <p>No achievements recorded yet.</p>
      )}

      <h2>Participation</h2>
      <p>Total Participants: {activity.participationDetails?.total || 0}</p>
      <p>Status: {activity.participationDetails?.status || 'Not Enrolled'}</p>

      {/* Upcoming Events */}
      <h2>Upcoming Events</h2>
      {activity.upcomingEvents?.length > 0 ? (
        <ul>
          {activity.upcomingEvents.map((event, index) => (
            <li key={index}>
              <strong>{event.name}</strong> on {event.date}
            </li>
          ))}
        </ul>
      ) : (
        <p>No upcoming events.</p>
      )}

      {/* Conducted Events */}
      <h2>Conducted Events</h2>
      {activity.conductedEvents?.length > 0 ? (
        <ul>
          {activity.conductedEvents.map((event, index) => (
            <li key={index}>
              <strong>{event.name}</strong> on {event.date}
            </li>
          ))}
        </ul>
      ) : (
        <p>No conducted events.</p>
      )}

      {/* Enrollment Buttons */}
      <div className="enrollment-buttons">
        <button onClick={handleEnroll} className="enroll-button">
          Enroll in Upcoming Event
        </button>
        <button onClick={handleUnenroll} className="unenroll-button">
          Unenroll from Upcoming Event
        </button>
      </div>

      <button onClick={handleGoBack} className="back-button">
        Go Back
      </button>
    </div>
  );
};

export default ActivityDetail;









