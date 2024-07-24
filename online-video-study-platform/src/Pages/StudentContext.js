import React, { createContext, useState } from 'react';
import '../Pages/Styles.css';
export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [studentData, setStudentData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    studentNumber: '',
    password: '',
    profileImage: null,
  });

  return (
    <StudentContext.Provider value={{ studentData, setStudentData }}>
      {children}
    </StudentContext.Provider>
  );
};
