import React, { useState } from 'react';
import './App.css';
import ConfirmationScreen from './components/RegistrationConfirmation/Confirmation';
import logo from './logo1.png';
import RegistrationForm from './RegistrationForm';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  // const [studentName, setStudentName] = useState('John Doe');
  // const [selectedCourses, setSelectedCourses] = useState(['Math', 'Science']);
  // const [totalCost, setTotalCost] = useState(300);
  const [studentName, setStudentName] = useState('');
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  return (
  <Router>
    <div className="App">
      <Routes>
          <Route
            path="/"
            element={
              <div>
                <h1>Welcome to Our Site</h1>
                <Link to="/register">
                  <button>Go to Registration Form</button>
                </Link>
              </div>
            }
          />
          <Route path="/register" element={<RegistrationForm />} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
