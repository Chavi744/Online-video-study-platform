import React from 'react';
import './Confirmation.css';

const ConfirmationScreen = ({ studentName, selectedCourses, totalCost }) => {
  return (
    <div className="confirmation-container">
      <h1>Registration confirmation</h1>
      <div className="confirmation-details">
        <p>Hi {studentName}, thank you for your registration.</p>
        <h2>Selected courses:</h2>
        <ul>
          {selectedCourses.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
        <h3>Total cost: ${totalCost}</h3>
      </div>
      <div className="confirmation-footer">
        <p>A confirmation email has been sent to the email address you provided.</p>
        <button onClick={() => window.location.href = '/'}>Go to Home</button>
      </div>
    </div>
  );
};

export default ConfirmationScreen;
