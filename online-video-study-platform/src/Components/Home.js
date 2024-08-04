import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <h2>Welcome</h2>
      <div className="home-links">
        <Link to="/login" className="home-link">Login</Link>
        <Link to="/sign-up" className="home-link">Sign Up</Link>
        <Link to="/degree-selection" className="home-link">Enter as Guest</Link>
      </div>
    </div>
  );
};

export default Home;

