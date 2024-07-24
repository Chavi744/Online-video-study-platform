import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../PersonalArea.css'; // עיצוב הדף

const AdminCourseManagement = () => {
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({ name: '', description: '', instructor: '' });

  useEffect(() => {
    axios.get('http://localhost:5000/api/courses')
      .then(response => {
        setCourses(response.data);
      })
      .catch(error => {
        console.error('Error fetching courses:', error);
      });
  }, []);

  const handleAddCourse = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/courses', newCourse)
      .then(response => {
        setCourses([...courses, response.data]);
        setNewCourse({ name: '', description: '', instructor: '' });
      })
      .catch(error => {
        console.error('Error adding course:', error);
      });
  };

  const handleDeleteCourse = (courseId) => {
    axios.delete(`http://localhost:5000/api/courses/${courseId}`)
      .then(() => {
        setCourses(courses.filter(course => course._id !== courseId));
      })
      .catch(error => {
        console.error('Error deleting course:', error);
      });
  };

  return (
    <div className="admin-course-management">
      <h2>Admin Course Management</h2>
      <form onSubmit={handleAddCourse}>
        <input
          type="text"
          placeholder="Course Name"
          value={newCourse.name}
          onChange={(e) => setNewCourse({ ...newCourse, name: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={newCourse.description}
          onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Instructor"
          value={newCourse.instructor}
          onChange={(e) => setNewCourse({ ...newCourse, instructor: e.target.value })}
          required
        />
        <button type="submit">Add Course</button>
      </form>
      <h3>Existing Courses</h3>
      <ul>
        {courses.map(course => (
          <li key={course._id}>
            {course.name} - {course.instructor}
            <button onClick={() => handleDeleteCourse(course._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminCourseManagement;
