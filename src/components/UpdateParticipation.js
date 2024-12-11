// src/components/UpdateParticipation.js
import React from 'react';

const UpdateParticipation = () => {
  return (
    <div className="update-participation">
      <h2>Update Participation</h2>
      <form>
        {/* Form fields for updating participation */}
        <label>
          Student ID:
          <input type="text" placeholder="Enter student ID" />
        </label>
        <br />
        <label>
          Participation Status:
          <select>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
            <option value="not-started">Not Started</option>
          </select>
        </label>
        <br />
        <button type="submit">Update Participation</button>
      </form>
    </div>
  );
};

export default UpdateParticipation;



