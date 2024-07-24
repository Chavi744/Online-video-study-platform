import React from 'react';
import '../PersonalArea.css'; // עיצוב הדף

const AdminArea = () => {
  return (
    <div className="personal-area">
      <h1>Admin Personal Area</h1>
      <div className="section">
        <h2>Manage Users</h2>
        <p>View, add, and edit user information.</p>
        <button>Manage Users</button>
      </div>
      <div className="section">
        <h2>View Reports</h2>
        <p>Generate and view system reports.</p>
        <button>View Reports</button>
      </div>
      <div className="section">
        <h2>System Settings</h2>
        <p>Configure system settings and preferences.</p>
        <button>System Settings</button>
      </div>
    </div>
  );
};

export default AdminArea;
