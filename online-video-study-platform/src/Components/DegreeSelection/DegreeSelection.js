import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DegreeSelection.css';
// import Layout from '.../Layout';

function DegreeSelection({ degrees, selectDegree }) {
  const navigate = useNavigate();

  const handleSelectDegree = (degree) => {
    selectDegree(degree);
    navigate('/course-selection');
  };

  return (
    <section id="degree-selection">
      <h2>Select Degree</h2>
      <div className="degree-container">
        {degrees.map(degree => (
          <div key={degree.id} className="degree" onClick={() => handleSelectDegree(degree)}>
            <div className="degree-icon">{degree.icon}</div>
            <h3>{degree.name}</h3>
            <p>{degree.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DegreeSelection;
