import React from 'react';
import Adminlogin from './Admin/Adminlogin';
import hat from './hat.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to CoursMart!</h1>
      <div className="h3-container">
        <h3>
        <img src={hat} alt="hat" className="hat" />
          Join our great team-
        </h3>
      </div>
      <Adminlogin />
    </div>
export default App;
