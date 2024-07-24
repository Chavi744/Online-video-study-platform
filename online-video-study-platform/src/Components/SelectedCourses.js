import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SelectedCourses from '../Components/SelectedCourses';
import '../App.css';

const SelectedCoursesPage = () => {
  const [selectedCourse, setSelectedCourses] = useState(() => {
    const savedCourses = localStorage.getItem('selectedCourse');
    return savedCourses ? JSON.parse(savedCourses) : [];
  });
  const navigate = useNavigate();

  const removeCourse = (id) => {
    const updatedCourses = selectedCourse.filter(course => course.id !== id);
    setSelectedCourses(updatedCourses);
    localStorage.setItem('selectedCourse', JSON.stringify(updatedCourses));
  };

  const goBack = () => {
    navigate('/Course-Registration');
  };

  return (
    <div className="selected-courses-page">
      <SelectedCourses
        selectedCourse={selectedCourse}
        removeCourse={removeCourse}
      />
      <button className="back-button" onClick={goBack}>
        Back to Course Selection
      </button>
    </div>
  );
};

export default SelectedCoursesPage;
