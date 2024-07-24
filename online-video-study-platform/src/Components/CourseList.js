// src/components/CourseList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './CoursesList.css';

const CoursesList = () => {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('/api/courses').then(response => {
      setCourses(response.data);
    });
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="courses-list">
      <h1>רשימת הקורסים הזמינים</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/manage-courses">Manage Courses</Link>
      </nav>
      <input 
        type="text" 
        placeholder="חיפוש קורסים לפי שם" 
        value={searchTerm} 
        onChange={handleSearch}
      />
      <div className="courses-grid">
        {courses.filter(course => course.name.toLowerCase().includes(searchTerm.toLowerCase())).map(course => (
          <div className="course-card" key={course._id}>
            <h3>{course.name}</h3>
            <p>{course.description}</p>
            <p>Instructor: {course.instructor}</p>
            <p>Students Enrolled: {course.enrolledStudents}</p>
            <p>Level: {course.level}</p>
            <button>Register</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesList;
