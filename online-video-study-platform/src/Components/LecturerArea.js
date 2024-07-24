import React from 'react';
import '../PersonalArea.css';

const LecturerArea = () => {
  return (
    <div className="personal-area">
      <h1>Lecturer Personal Area</h1>
      <div className="section">
        <h2>View Schedule</h2>
        <p>Check your class schedule and timings.</p>
        <button>View Schedule</button>
      </div>
      <div className="section">
        <h2>Manage Courses</h2>
        <p>View and manage the courses you are teaching.</p>
        <button>Manage Courses</button>
      </div>
      <div className="section">
        <h2>Upload Materials</h2>
        <p>Upload course materials and assignments.</p>
        <button>Upload Materials</button>
      </div>
    </div>
  );
};

export default LecturerArea;
