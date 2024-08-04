// Layout.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Pages/HamburgerMenu/HamburgerMenu.css';

function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="layout">
      <button className="hamburger-button" onClick={toggleMenu}>
        ☰
      </button>

      <div className={`menu-overlay ${isOpen ? 'open' : ''}`} onClick={closeMenu}></div>

      <div className={`menu-content ${isOpen ? 'open' : ''}`}>
        <span className="close-button" onClick={closeMenu}>×</span>
        <ul>
          <li>
            <Link to="/course-details/:orderId/CourseMaterials" onClick={closeMenu}>Course Materials</Link>
          </li>
          <li>
            <Link to="/course-details/:orderId/practice" onClick={closeMenu}>Practice and Understanding</Link>
          </li>
          <li>
            <Link to="/course-details/:orderId/activities" onClick={closeMenu}>Activities</Link>
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

      <main>
        {children}
      </main>
    </div>
  );
}

export default Layout;
