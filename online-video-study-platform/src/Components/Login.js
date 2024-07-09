import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import '../Pages/Styles.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailMessage, setEmailMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [formData, setFormData] = useState({ role: 'student' });
  const navigate = useNavigate();

  const validateEmail = (email) => {
    if (!email) return 'Email cannot be empty.';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) ? 'Email is valid!' : 'Invalid email address.';
  };

  const validatePassword = (password) => {
    if (!password) return 'Password cannot be empty.';
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (password.length < minLength) return `Password must be at least ${minLength} characters long.`;
    if (!hasUpperCase) return 'Password must contain at least one uppercase letter.';
    if (!hasLowerCase) return 'Password must contain at least one lowercase letter.';
    if (!hasNumber) return 'Password must contain at least one number.';
    if (!hasSpecialChar) return 'Password must contain at least one special character.';

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailValidation = validateEmail(email);
    const passwordValidation = validatePassword(password);

    if (emailValidation === 'Email is valid!' && passwordValidation === 'Password is valid!') {
      setFormMessage(`Form is valid. Logging in as ${formData.role}...`);
      localStorage.setItem('user', JSON.stringify({ email, role: formData.role }));

      if (formData.role === 'student') navigate('/student-area');
      else if (formData.role === 'admin') navigate('/admin-area');
      else if (formData.role === 'lecturer') navigate('/lecturer-area');
    } else {
      setFormMessage('Please correct the errors before submitting.');
    }
  };

  const handleForgotPassword = ()  => {
    
    navigate('/forgot-password');
  };

  const handleSignUp = () => {
    navigate('/sign-in');
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
          <label>Role:</label>
          <select name="role" value={formData.role} onChange={handleChange}>
            <option value="student">Student</option>
            <option value="admin">Admin</option>
            <option value="lecturer">Lecturer</option>
          </select>
        </div>
        <div className="form-group">
          <a onClick={handleForgotPassword}>Forgot Password?</a>
          <a onClick={handleSignUp}>Sign Up</a>
        </div>
        <p className="form-message">{formMessage}</p>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
