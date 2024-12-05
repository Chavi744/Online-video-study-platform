// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './HamburgerMenu.css';

// function HamburgerMenu() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="hamburger-menu">
//       <button className="hamburger-button" onClick={toggleMenu}>
//         ☰
//       </button>
//       <div className={`menu-content ${isOpen ? 'open' : ''}`}>
//         <ul>
//           <li>
//             <Link to="/course-details/:courseId/Course Materials">Course Materials</Link>
//           </li>
//           <li>
//             <Link to="/course-details/:courseId/practice">Practice and Understanding</Link>
//           </li>
//           <li>
//             <Link to="/course-details/:courseId/activities">Activities</Link>
//           </li>
//           <li>
//             <Link to="/course-details/:courseId/personal-management">Personal Management</Link>
//           </li>
//           <li>
//             <Link to="/course-details/:courseId/support">Support</Link>
//           </li>
//           <li>
//             <Link to="/course-details/:courseId/workshops">Workshops and Notifications</Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default HamburgerMenu;
