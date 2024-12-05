import React from 'react';
import '../HamburgerMenu.css';

function CoursePage() {
  return (
    <div>
      <h1>Course Details</h1>
      {/* פרטי הקורס, התוכן והוידאו */}
      <video controls>
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default CoursePage;
