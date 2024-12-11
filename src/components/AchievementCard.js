// src/components/AchievementCard.js
import React from 'react';
import './AchievementCard.css';

const AchievementCard = ({ achievement }) => {
  return (
    <div className="achievement-card">
      <h3>{achievement.title}</h3>
      <p><strong>Description:</strong> {achievement.description}</p>
      <p><strong>Activity Type:</strong> {achievement.activityType}</p>
      <p><strong>Status:</strong> {achievement.completed ? 'Completed' : 'In Progress'}</p>
    </div>
  );
};

export default AchievementCard;





  
  