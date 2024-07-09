
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './Components/Login';
import ForgotPassword from './Components/ForgotPassword';
import RegistrationForm from './RegistrationForm';
import StudentArea from './Components/StudentArea';
import AdminArea from './Components/AdminArea';
import LecturerArea from './Components/LecturerArea';
import { StudentProvider } from './Pages/StudentContext';

function App() {
  return (
    <StudentProvider>
      <Router>
        <Routes>
        <Route path="/" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/sign-in" element={<RegistrationForm />} />
          <Route path="/student-area" element={<StudentArea />} />
          <Route path="/admin-area" element={<AdminArea />} />
          <Route path="/lecturer-area" element={<LecturerArea />} />       
           </Routes>
      </Router>
    </StudentProvider>
  );
}

export default App;