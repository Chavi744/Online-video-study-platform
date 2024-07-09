// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import '../Pages/Styles.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailMessage, setEmailMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    if (email === undefined || email === null) return 'Email cannot be empty.';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'Invalid email address.';
    }
    return 'Email is valid!';
  };

  const validatePassword = (password) => {
    if (password === undefined || password === null) return 'Password cannot be empty.';
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (password.length < minLength) {
      return `Password must be at least ${minLength} characters long.`;
    }
    if (!hasUpperCase) {
      return 'Password must contain at least one uppercase letter.';
    }
    if (!hasLowerCase) {
      return 'Password must contain at least one lowercase letter.';
    }
    if (!hasNumber) {
      return 'Password must contain at least one number.';
    }
    if (!hasSpecialChar) {
      return 'Password must contain at least one special character.';
    }
    return 'Password is valid!';
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setEmailMessage(validateEmail(newEmail));
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordMessage(validatePassword(newPassword));
  };

  const handleSubmit = (e, userType) => {
    e.preventDefault();
    const emailValidation = validateEmail(email);
    const passwordValidation = validatePassword(password);
    if (emailValidation === 'Email is valid!' && passwordValidation === 'Password is valid!') {
      setFormMessage(`Form is valid. Logging in as ${userType}...`);
      // Submit form logic here
    } else {
      setFormMessage('Please correct the errors before submitting.');
    }
  };

  const handleForgotPassword  = () => {
    navigate('/forgot-password');
  };

  const handleSignIN  = () => {
    navigate('/sign-in');
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
          />
          <p className="message">{emailMessage}</p>
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your password"
          />
          <p className="message">{passwordMessage}</p>
        </div>
        <div className="form-group">
          <button type="button" onClick={(e) => handleSubmit(e, 'Admin')}>Sign in as Admin</button>
          <button type="button" onClick={(e) => handleSubmit(e, 'Lecturer')}>Sign in as Lecturer</button>
          <button type="button" onClick={(e) => handleSubmit(e, 'Student')}>Sign in as Student</button>
        </div>
        <div className="form-group">
          <a  onClick={handleForgotPassword}>Forgot Password?</a>
          <a  onClick={handleForgotPassword}>To sign up</a>
        </div>
        <p className="form-message">{formMessage}</p>
      </form>
    </div>
  );
};


export default Login;
