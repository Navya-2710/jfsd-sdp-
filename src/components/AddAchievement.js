// src/components/AddAchievement.js
import React from 'react';

const AddAchievement = () => {
  return (
    <div className="add-achievement">
      <h2>Add Achievement</h2>
      <form>
        {/* Form fields for adding an achievement */}
        <label>
          Achievement Title:
          <input type="text" placeholder="Enter title" />
        </label>
        <br />
        <label>
          Description:
          <textarea placeholder="Enter description"></textarea>
        </label>
        <br />
        <button type="submit">Add Achievement</button>
      </form>
    </div>
  );
};

export default AddAchievement;

