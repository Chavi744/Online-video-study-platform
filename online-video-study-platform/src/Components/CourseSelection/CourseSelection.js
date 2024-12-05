
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CourseSelection.css';
// import Layout from '.../Layout';

function CourseSelection({ courses, selectCourse }) {
  const navigate = useNavigate();

  const handleSelectCourse = (course) => {
    selectCourse(course);
    navigate(`/course-details/${course.id}`);
  };

  return (
    <section id="course-selection">
      <h2>Select Course</h2>
      <div className="course-container">
        {courses.map(course => (
          <div 
            key={course.id} 
            className={`course ${!course.available ? 'unavailable' : ''}`} 
            onClick={() => course.available && handleSelectCourse(course)}
          >
            <img src={course.image} alt={course.title} />
            <h3>{course.title}</h3>
            <p>{course.available ? 'Available' : 'Not Available'}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CourseSelection;
