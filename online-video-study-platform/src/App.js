import React, { useState } from 'react';
// import Layout from './Layout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DegreeSelection from './Components/DegreeSelection/DegreeSelection';
import CourseSelection from './Components/CourseSelection/CourseSelection';
import CourseDetails from './Components/CourseDetails';
import CourseMaterials from './Components/CourseMaterials/CourseMaterials';
import PracticeAndUnderstanding from './Components/PracticeAndUnderstanding/PracticeAndUnderstanding';
import Activities from './Components/Activities/Activities';
import PersonalManagement from './Components/PersonalManagement/PersonalManagement';
import './Components/DegreeSelection/DegreeSelection.css';


const degrees = [
  { id: 1, name: 'Computer Science', icon: '💻', description: 'Explore computing and technology.' },
  { id: 2, name: 'Business Administration', icon: '📈', description: 'Dive into the business world.' },
  { id: 3, name: 'Electrical Engineering', icon: '⚡', description: 'Study electronics and circuits.' },
];

const allCourses = {
  1: [
    { id: 1, title: 'Intro to CS', image: 'https://via.placeholder.com/150', available: true },
    { id: 2, title: 'Data Structures', image: 'https://via.placeholder.com/150', available: false },
  ],
  2: [
    { id: 3, title: 'Marketing 101', image: 'https://via.placeholder.com/150', available: true },
    { id: 4, title: 'Finance', image: 'https://via.placeholder.com/150', available: true },
  ],
  3: [
    { id: 5, title: 'Circuits', image: 'https://via.placeholder.com/150', available: true },
    { id: 6, title: 'Signals', image: 'https://via.placeholder.com/150', available: false },
  ],
};

function App() {
  const [degree, setDegree] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const selectDegree = (degree) => {
    setDegree(degree);
    setSelectedCourse(null);
  };

  const selectCourse = (course) => {
    setSelectedCourse(course);
  };

  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<DegreeSelection degrees={degrees} selectDegree={selectDegree} />} />
        <Route path="/course-selection" element={<CourseSelection courses={degree ? allCourses[degree.id] : []} selectCourse={selectCourse} />} />
        <Route path="/course-details/1/" element={<CourseDetails course={selectedCourse} />} />
        <Route path="/course-details/1/Course-Materials" Component={CourseMaterials} />
        <Route path="/course-details/1/Practice" Component={PracticeAndUnderstanding} />
        <Route path="/course-details/1/activities" Component={Activities} />
        <Route path="/course-details/1/personal-management" Component={PersonalManagement} />
        {/* <Route path="/course-details/:courseId" element={<CourseDetails course={selectedCourse} />} />
        <Route path="/course-details/:courseId" element={<CourseDetails course={selectedCourse} />} />
        <Route path="/course-details/:courseId" element={<CourseDetails course={selectedCourse} />} /> */}

      </Routes>
    </Router>
  );
}

export default App;
