import React, { useEffect, useState } from 'react';
import './PersonalManagement.css';
import { Line } from 'react-chartjs-2';

const PersonalManagement = ({ userData }) => {
  const [motivationLevel, setMotivationLevel] = useState(null);
  const [gradesData, setGradesData] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (userData) {
      setMotivationLevel(userData.motivation || 0);
      setGradesData(userData.grades || []);
      setName(userData.name || 'N/A');
      setEmail(userData.email || 'N/A');
    }
  }, [userData]);

  const renderMotivation = () => {
    if (motivationLevel === null) return 'No Data';
    if (motivationLevel >= 8) {
      return '😄';
    } else if (motivationLevel >= 5) {
      return '🙂';
    } else {
      return '😟';
    }
  };

  const data = {
    labels: gradesData.map((g) => g.course),
    datasets: [
      {
        label: 'Grades',
        data: gradesData.map((g) => g.grade),
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
        {gradesData.length > 0 ? <Line data={data} /> : <p>No grades available.</p>}
      </div>
      <div className="personal-info">
        <h3>Personal Information</h3>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        {/* אפשרויות עדכון פרטים אישיים */}
      </div>
    </div>
  );
};

export default PersonalManagement;
