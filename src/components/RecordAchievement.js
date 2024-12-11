import React, { useState } from 'react';
import axios from 'axios';

const RecordAchievement = ({ setAchievements }) => {
  const [achievement, setAchievement] = useState({
    title: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAchievement((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/admin/achievements', achievement)
      .then((response) => {
        setAchievements((prev) => [...prev, response.data]);
        setAchievement({ title: '', description: '' }); // Clear form after submission
      })
      .catch((error) => {
        console.error('Error adding achievement', error);
      });
  };

  return (
    <div className="record-achievement">
      <h2>Add Achievement</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={achievement.title}
          onChange={handleInputChange}
          placeholder="Achievement Title"
          required
        />
        <textarea
          name="description"
          value={achievement.description}
          onChange={handleInputChange}
          placeholder="Achievement Description"
          required
        />
        <button type="submit">Add Achievement</button>
      </form>
    </div>
  );
};

export default RecordAchievement;

