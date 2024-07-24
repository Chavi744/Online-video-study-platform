import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../PersonalArea.css'; // עיצוב הדף

const LecturerCourseManagement = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/courses')
      .then(response => {
        setCourses(response.data);
      })
      .catch(error => {
        console.error('Error fetching courses:', error);
      });
  }, []);

  return (
    <div className="lecturer-course-management">
      <h2>Lecturer Course Management</h2>
      <h3>Your Courses</h3>
      <ul>
        {courses.map(course => (
          <li key={course._id}>
            {course.name} - {course.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LecturerCourseManagement;
