import React, { useState } from 'react';
import './Adminlogin.css';
import '../App.css';
import logo from './logo.png';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function Adminlogin() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [teachingField, setTeachingField] = useState('');
  const [resume, setResume] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Teaching Field:', teachingField);
    if (resume) {
      console.log('Resume:', resume.name);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const generateStrongPassword = () => {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
    let strongPassword = '';
    for (let i = 0; i < 12; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      strongPassword += charset[randomIndex];
    }
    return strongPassword;
  };

  const handlePasswordSuggestion = () => {
    const newPassword = generateStrongPassword();
    setPassword(newPassword);
  };

  return (
    <div className="Adminlogin">
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <header className="header">
        <form onSubmit={handleSubmit} className="registration-form">
          <h2>Lecturer Registration</h2>
          <label>
            Name:
            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Teaching Field:
            <select
              value={teachingField}
              onChange={(e) => setTeachingField(e.target.value)}
              required
            >
              <option value="">Select a field</option>
              <option value="Computer Science">Computer Science</option>
              <option value="English">English</option>
              <option value="Mathematics">Mathematics</option>
            </select>
          </label>
          <label>
            Upload Resume:
            <input
              type="file"
              onChange={(e) => setResume(e.target.files[0])}
              required
            />
          </label>
          <label>
            Password:
            <div className="password-container">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span className="password-toggle" onClick={togglePasswordVisibility}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <span className="suggested-password" onClick={handlePasswordSuggestion}>
              Suggest a strong password
            </span>
          </label>
          <button type="submit">Submit</button>
        </form>
      </header>
    </div>
  );
}

export default Adminlogin;
