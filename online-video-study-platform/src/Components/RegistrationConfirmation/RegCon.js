import React, { useState } from 'react';
import ConfirmationScreen from './Confirmation.js';
import './RegCon.css'

function RegCon() {
  // const [studentName, setStudentName] = useState('John Doe');
  // const [selectedCourses, setSelectedCourses] = useState(['Math', 'Science']);
  // const [totalCost, setTotalCost] = useState(300);
  const [studentName, setStudentName] = useState('');
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  return (
      <div className="Reg">
        <main>
          <ConfirmationScreen 
              studentName={studentName} 
              selectedCourses={selectedCourses} 
              totalCost={totalCost} 
          />
        </main>
      </div>
  );
}

export default RegCon;