import React, { useState } from 'react';
import './App.css';
import ConfirmationScreen from './components/RegistrationConfirmation/Confirmation';
import logo from './logo1.png';

function App() {
  // const [studentName, setStudentName] = useState('John Doe');
  // const [selectedCourses, setSelectedCourses] = useState(['Math', 'Science']);
  // const [totalCost, setTotalCost] = useState(300);
  const [studentName, setStudentName] = useState('');
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  return (
    // <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="Logo" className="login-logo" />
        </header>

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

export default App;
