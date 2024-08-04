import '../HamburgerMenu.css'; // עיצוב הדף
import React from 'react';
// import Layout from './Layout';

function SelectedCourses({ selectedCourses }) {
  return (
    <section id="selected-courses">
      <h2>Selected Courses</h2>
      {selectedCourses.length === 0 ? (
        <p>No courses selected. Please go back and choose your courses.</p>
      ) : (
        <div className="selected-course-container">
          {selectedCourses.map(course => (
            <div key={course.id} className="selected-course">
              <h3>{course.title}</h3>
              <img src={course.image} alt={course.title} />
              <p>
                <a href={course.link} target="_blank" rel="noopener noreferrer">Go to course</a>
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default SelectedCourses;

