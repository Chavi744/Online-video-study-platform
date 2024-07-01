// src/pages/CourseRegistration.js
import React, { useState, useEffect } from 'react';
import CourseList from '../Components/CourseList';
import SelectedCourses from '../Components/SelectedCourses';

const CourseRegistration = () => {
  const [courses] = useState([
    { id: 1, name: 'Introduction to Computer Science', details: 'Basic concepts of computer science, algorithms, and programming.' },
    { id: 2, name: 'Data Structures and Algorithms', details: 'In-depth study of data structures, algorithms, and their applications.' },
    { id: 3, name: 'Web Development', details: 'Introduction to HTML, CSS, JavaScript, and building responsive web pages.' },
    { id: 4, name: 'Database Systems', details: 'Design, implementation, and management of database systems using SQL.' },
    { id: 5, name: 'Machine Learning', details: 'Basic principles and techniques of machine learning and data analysis.' },
    { id: 6, name: 'Operating Systems', details: 'Study of operating system concepts, processes, threads, and memory management.' },
    { id: 7, name: 'Software Engineering', details: 'Principles of software design, development, testing, and maintenance.' },
    { id: 8, name: 'Network Security', details: 'Introduction to network security principles, protocols, and cryptography.' },
    { id: 9, name: 'Artificial Intelligence', details: 'Basic concepts and applications of artificial intelligence and intelligent agents.' },
    { id: 10, name: 'Mobile App Development', details: 'Design and development of mobile applications for Android and iOS.' },
  ]);


  const [selectedCourses, setSelectedCourses] = useState(() => {
    const savedCourses = localStorage.getItem('selectedCourses');
    return savedCourses ? JSON.parse(savedCourses) : [];
  });

  useEffect(() => {
    localStorage.setItem('selectedCourses', JSON.stringify(selectedCourses));
  }, [selectedCourses]);

  const addCourse = (course) => {
    if (!selectedCourses.find(c => c.id === course.id)) {
      setSelectedCourses([...selectedCourses, course]);
    }
  };

  const removeCourse = (id) => {
    setSelectedCourses(selectedCourses.filter(course => course.id !== id));
  };

  return (
    <div className="course-registration">
      <CourseList courses={courses} addCourse={addCourse} />
      <SelectedCourses selectedCourses={selectedCourses} removeCourse={removeCourse} />
    </div>
  );
};

export default CourseRegistration;
