// src/components/SelectedCourses.js
import React from 'react';

const SelectedCourses = ({ selectedCourses, removeCourse }) => {
  return (
    <div className="selected-courses">
      <h2>Selected Courses</h2>
      <ul>
        {selectedCourses.map(course => (
          <li key={course.id}>
            {course.name} - {course.details}
            <button onClick={() => removeCourse(course.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectedCourses;
