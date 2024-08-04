import React from 'react';


function CourseItem({ course }) {
  return (
    <div className="course">
      <h2>{course.title}</h2>
      <img src={course.image} alt={course.title} />
      <p>
        <a href={course.link} target="_blank" rel="noopener noreferrer">Go to course</a>
      </p>
    </div>
  );
}

export default CourseItem;
