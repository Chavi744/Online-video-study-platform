import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CategoryList from '../Components/CategoryList';
import CourseList from '../Components/CourseList';
import SelectedCourses from '../Components/SelectedCourses';

const coursesData = {
  'Math': [
    { id: 1, name: 'Algebra', details: 'Basics of algebra.' },
    { id: 2, name: 'Calculus', details: 'Introduction to calculus.' },
    { id: 3, name: 'Statistics', details: 'Fundamental concepts in statistics.' },
  ],
  'English': [
    { id: 4, name: 'Grammar', details: 'English grammar rules.' },
    { id: 5, name: 'Literature', details: 'Study of English literature.' },
    { id: 6, name: 'Writing', details: 'Techniques for writing essays.' },
  ],
  'Computer Science': [
    { id: 7, name: 'Programming', details: 'Introduction to programming.' },
    { id: 8, name: 'Web Development', details: 'Basics of web development.' },
    { id: 9, name: 'Data Science', details: 'Introduction to data science.' },
  ],
};

const CourseRegistration = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCourses, setSelectedCourses] = useState(() => {
    const savedCourses = localStorage.getItem('selectedCourses');
    return savedCourses ? JSON.parse(savedCourses) : [];
  });
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('selectedCourses', JSON.stringify(selectedCourses));
  }, [selectedCourses]);

  const addCourse = (course) => {
    if (!selectedCourses.find(c => c.id === course.id)) {
      setSelectedCourses([...selectedCourses, course]);
    }
  };

  const goToSelectedCoursesPage = () => {
    navigate('/selected-courses');
  };

  return (
    <div className="course-registration">
      <CategoryList
        categories={Object.keys(coursesData)}
        setSelectedCategory={setSelectedCategory}
      />
      {selectedCategory && (
        <>
          <div style={{ margin: '20px 0' }}></div>
          <CourseList
            courses={coursesData[selectedCategory]}
            addCourse={addCourse}
          />
        </>
      )}
      <button className="view-selected-courses-button" onClick={goToSelectedCoursesPage}>
        View Selected Courses
      </button>
    </div>
  );
};

export default CourseRegistration;
