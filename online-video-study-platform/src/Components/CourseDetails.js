import '../Pages/HamburgerMenu/HamburgerMenu.css';
import { useParams, Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CourseDetails() {
  const [isOpen, setIsOpen] = useState(false);
  const { degreeId, courseId } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(`/api/course-materials/${degreeId}/${courseId}`);
        setCourse(response.data);
      } catch (error) {
        console.error('Error fetching course:', error);
      }
    };
    fetchCourse();
  }, [degreeId, courseId]);

  // if (!course) {
  //   return <div>Loading...</div>;
  // }
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="hamburger-menu">
      <button className="hamburger-button" onClick={toggleMenu}>
        ☰
      </button>
      

      <div className={`menu-overlay ${isOpen ? 'open' : ''}`} onClick={closeMenu}></div>

      <div className={`menu-content ${isOpen ? 'open' : ''}`}>

        <ul>
          <li>
            <Link to="/course-details/1/Course-Materials" onClick={closeMenu}>Course Materials</Link>
          </li>
          <li>
            <Link to="/course-details/1/practice" onClick={closeMenu}>Practice and Understanding</Link>
          </li>
          <li>
            <Link to="/course-details/1/activities" onClick={closeMenu}>Activities</Link>
          </li>
          <li>
            <Link to="/course-details/1/personal-management" onClick={closeMenu}>Personal Management</Link>

          </li>
          <li>
            <Link to="/course-details/1/support" onClick={closeMenu}>Support</Link>
          </li>
          <li>
            <Link to="/course-details/1/workshops" onClick={closeMenu}>Workshops and Notifications</Link>
          </li>
        </ul>
      </div>
    </div>
  )};


export default CourseDetails;
