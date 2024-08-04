import CourseItem from './CourseItem';
import '../HamburgerMenu.css'; // עיצוב הדף
import React, { useEffect, useState } from 'react';

function CourseList() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('https://example.com/api/courses')
      .then(response => response.json())
      .then(data => setCourses(data))
      .catch(error => console.error('Error fetching courses:', error));
  }, []);

  return (
    <section id="course-list">
      <h2>Available Courses</h2>
      <div className="course-container">
        {courses.map(course => (
          <CourseItem key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
}

export default CourseList;
