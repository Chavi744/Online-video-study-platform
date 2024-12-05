// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
import '../Pages/Styles.css';
import React, { useState } from 'react';


const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const validateEmail = (email) => {
    if (email === undefined || email === null) return 'Email cannot be empty.';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'Invalid email address.';
    }}
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Here you would send the email to your backend to handle the password reset
      setMessage('If this email is registered, you will receive a password reset link.');
    } else {
      setMessage('Please enter a valid email.');
    }
  };

  return (
    <div className="forgot-password-container">
      <p>Please enter your email to reset your password.</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <button type="submit">Send Reset Link</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default ForgotPassword;
