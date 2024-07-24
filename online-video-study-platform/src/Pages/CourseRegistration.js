import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../CourseRegistration.css';

const CourseRegistration = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);

  useEffect(() => {
    axios.get('/api/courses').then(response => {
      setCourses(response.data);
    });
  }, []);

  const handleCheckboxChange = (courseId) => {
    if (selectedCourses.includes(courseId)) {
      setSelectedCourses(selectedCourses.filter(id => id !== courseId));
    } else {
      setSelectedCourses([...selectedCourses, courseId]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to save selected courses
  };

  return (
    <div className="register-courses">
      <h2>רישום לקורסים</h2>
      <form onSubmit={handleSubmit}>
        <table>
          <thead>
            <tr>
              <th>רישום</th>
              <th>שם הקורס</th>
              <th>תיאור</th>
              <th>מרצה</th>
            </tr>
          </thead>
          <tbody>
            {courses.map(course => (
              <tr key={course._id}>
                <td>
                  <input 
                    type="checkbox" 
                    checked={selectedCourses.includes(course._id)}
                    onChange={() => handleCheckboxChange(course._id)}
                  />
                </td>
                <td>{course.name}</td>
                <td>{course.description}</td>
                <td>{course.instructor}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button type="submit">שמור רישום</button>
      </form>
    </div>
  );
};

export default CourseRegistration;
