import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../HamburgerMenu.css'; // עיצוב הדף
import { useLocation, useNavigate } from 'react-router-dom';

const CourseRegistration = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const { degree } = location.state || {};

  useEffect(() => {
    if (degree) {
      axios.get(`http://localhost:5000/api/courses?degree=${degree}`)
        .then(response => {
          setCourses(response.data);
        })
        .catch(error => {
          console.error('There was an error fetching the courses!', error);
        });
    }
  }, [degree]);

  const handleCheckboxChange = (courseId) => {
    if (selectedCourses.includes(courseId)) {
      setSelectedCourses(selectedCourses.filter(id => id !== courseId));
    } else {
      setSelectedCourses([...selectedCourses, courseId]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/selected-courses', { state: { selectedCourses } });
  };

  return (
    <div className="register-courses">
      <h2>Course Registration</h2>
      <form onSubmit={handleSubmit}>
        <table>
          <thead>
            <tr>
              <th>Registration</th>
              <th>Course Name</th>
              <th>Description</th>
              <th>Instructor</th>
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
        <button type="submit">Save Registration</button>
      </form>
    </div>
  );
};

export default CourseRegistration;
