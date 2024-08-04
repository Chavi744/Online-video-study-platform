import React, { useState, useEffect } from 'react';
import './PersonalManagement.css';
import { Line } from 'react-chartjs-2';

const PersonalManagement = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // קבלת נתוני משתמש מהשרת
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/user/:id'); // הכנס את ה-ID המתאים
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  const motivationLevel = userData.motivation || 0; 
  const gradesData = userData.grades || []; 

  const renderMotivation = () => {
    if (motivationLevel >= 8) {
      return '😄';
    } else if (motivationLevel >= 5) {
      return '🙂';
    } else {
      return '😟';
    }
  };

  const data = {
    labels: gradesData.map(g => g.course || 'Unknown Course'),
    datasets: [
      {
        label: 'Grades',
        data: gradesData.map(g => g.grade || 0),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  return (
    <div className="personal-management">
      <h2>Personal Management</h2>
      <div className="motivation-meter">
        <h3>Motivation Level</h3>
        <div className="motivation-icon">{renderMotivation()}</div>
      </div>
      <div className="grades-chart">
        <h3>Progress Chart</h3>
        <Line data={data} />
      </div>
      <div className="personal-info">
        <h3>Personal Information</h3>
        <p>Name: {userData.name || 'Unknown'}</p>
        <p>Email: {userData.email || 'Unknown'}</p>
        <p>Course: {userData.course || 'Unknown'}</p>
        <p>Year: {userData.year || 'Unknown'}</p>
        <button className="edit-button">Edit Personal Info</button>
      </div>
    </div>
  );
};

export default PersonalManagement;
