// CourseMaterials.js
import React from 'react';
import './CourseMaterials.css'; // עיצוב הדף
import ProgressChart from '../ProgressChart';
// import Layout from '../Layout';

const studentProgressData = {
  labels: ['1', '2', '3', ' 4', ' 5','...'],
  values: [65, 59, 80, 81, 56],
};

const CourseMaterials = () => {
  return (
    <div className="course-materials">
      <h1>Course Materials</h1>

      <div className="circle-container">
        <div className="circle">
          <img src="https://via.placeholder.com/100?text=Forums" alt="Forums" />
          <h2>Forums</h2>
          <p>Participate in discussions and ask questions in our forums.</p>
          <a href="/forums" className="button">Go to Forums</a>
        </div>

        <div className="circle">
          <img src="https://via.placeholder.com/100?text=Live+Session" alt="Live Session" />
          <h2>Live Session</h2>
          <p>Join the live session on Zoom.</p>
          <a href="https://zoom.us/j/your-meeting-id" className="button" target="_blank" rel="noopener noreferrer">Join Live Session</a>
        </div>

        <div className="circle">
          <img src="https://via.placeholder.com/100?text=Schedule" alt="Schedule" />
          <h2>Schedule for Live Sessions</h2>
          <p>Check the schedule for upcoming live sessions.</p>
          <a href="/schedule" className="button">View Schedule</a>
        </div>

        <div className="circle">
          <img src="https://www.w3schools.com/html/mov_bbb.mp4" alt="Video Recordings" />
          <h2>Video Recordings</h2>
          <p>Watch recorded sessions and lectures.</p>
          <a href="/video-recordings" className="button">View Video Recordings</a>
        </div>

        <div className="circle">
          <img src="https://via.placeholder.com/100?text=Reading" alt="Reading Materials" />
          <h2>Reading Materials</h2>
          <p>Access the required reading materials for the course.</p>
          <a href="/reading-materials" className="button">View Reading Materials</a>
        </div>

        <div className="circle">
          <img src="https://via.placeholder.com/100?text=Booklet" alt="Course Booklet" />
          <h2>Course Booklet</h2>
          <p>Download the course booklet for detailed information.</p>
          <a href="/path-to-course-booklet.pdf" className="button" download>Download Course Booklet</a>
        </div>
      </div>
      <ProgressChart data={studentProgressData} />
    </div>
    
  );
};

export default CourseMaterials;
