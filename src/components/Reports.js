// src/components/Reports.js
import React from 'react';

const Reports = () => {
  return (
    <div className="reports">
      <h2>Generate Reports</h2>
      <button onClick={() => alert('Report generated!')}>Generate Report</button>
      <div className="report-output">
        {/* Display some dummy data for report */}
        <p><strong>Report Name:</strong> Activity Participation Report</p>
        <p><strong>Generated On:</strong> 12/12/2024</p>
        <p><strong>Status:</strong> Completed</p>
      </div>
    </div>
  );
};

export default Reports;



