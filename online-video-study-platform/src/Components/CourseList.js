// src/components/CourseList.js
import React from 'react';

const CourseList = ({ courses, addCourse }) => {
  return (
    <div className="course-list">
      <h2>Select a Course</h2>
      <ul>
        {courses && courses.map(course => (
          <li key={course.id}>
            {course.name} - {course.details}
            <button onClick={() => addCourse(course)}>Add</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
