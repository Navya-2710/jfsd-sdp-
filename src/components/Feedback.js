import React from "react";
import "./Feedback.css";

const Feedback = () => {
  return (
    <div className="feedback">
      <h1>Feedback</h1>
      <textarea placeholder="Write your feedback here..." rows="5"></textarea>
      <button>Submit</button>
    </div>
  );
};

export default Feedback;

