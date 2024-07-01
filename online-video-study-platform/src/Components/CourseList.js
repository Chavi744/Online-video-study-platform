// src/components/CourseList.js
import React from 'react';

const CourseList = ({ courses, addCourse }) => {
  return (
    <div className="course-list">
      <h2>Available Courses</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            {course.name}
            <button onClick={() => addCourse(course)}>Add course</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
