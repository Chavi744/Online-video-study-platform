import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { StudentContext } from '../Pages/StudentContext';
import '../Styles.css'; // עיצוב הדף

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    studentNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
    birthDate: '',
    phoneNumber: '',
    address: '',
    major: '',
    gender: 'male'
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateField = (name, value) => {
    switch (name) {
      case 'email':
        return validateEmail(value);
      case 'password':
        return validatePassword(value);
      case 'confirmPassword':
        return value !== formData.password ? 'Passwords do not match' : '';
      case 'studentNumber':
        return validateStudentNumber(value);
      case 'phoneNumber':
        return validatePhoneNumber(value);
      case 'birthDate':
        return validateBirthDate(value);
      default:
        return !value ? `${name.charAt(0).toUpperCase() + name.slice(1)} is required` : '';
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const errorMessage = validateField(name, value);

    setErrors({
      ...errors,
      [name]: errorMessage
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

    setErrors({
      ...errors,
      [name]: ''
    });
  };

  const validateEmail = (email) => {
    if (!email) return 'Email cannot be empty.';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) ? '' : 'Invalid email address.';
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

    return '';
  };

  const validateStudentNumber = (studentNumber) => {
    const studentNumberRegex = /^[0-9]{6,10}$/;
    return studentNumberRegex.test(studentNumber) ? '' : 'Invalid student number. Must be 6-10 digits.';
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberRegex = /^[0-9]{10}$/;
    return phoneNumberRegex.test(phoneNumber) ? '' : 'Invalid phone number. Must be 10 digits.';
  };

  const validateBirthDate = (birthDate) => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    let age = today.getFullYear() - birthDateObj.getFullYear();
    let month = today.getMonth() - birthDateObj.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < birthDateObj.getDate())) {
      age--;
    }

    if (!birthDate) {
      return 'Birth date cannot be empty.';
    } else if (age < 18) {
      return 'You must be at least 18 years old.';
    } else if (isNaN(birthDateObj.getTime())) {
      return 'Invalid birth date.';
    } else {
      return '';
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const errorMessage = validateField(key, formData[key]);
      if (errorMessage) newErrors[key] = errorMessage;
    });

    if (Object.keys(newErrors).length === 0) {
      localStorage.setItem('userData', JSON.stringify(formData));
      navigate('/payment');
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="form-container">
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        {Object.keys(formData).map((key) => (
          <div key={key} className="form-group">
            <label>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
            <input
              type={key === 'password' || key === 'confirmPassword' ? 'password' : key === 'birthDate' ? 'date' : 'text'}
              name={key}
              value={formData[key]}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors[key] ? 'error' : ''}
              placeholder={`Enter your ${key}`}
            />
            {errors[key] && <span className="error-message">{errors[key]}</span>}
          </div>
        ))}
        <div className="form-group">
          <label>Gender</label>
          <div>
            <label>
              <input type="radio" name="gender" value="male" checked={formData.gender === 'male'} onChange={handleChange} /> Male
            </label>
            <label>
              <input type="radio" name="gender" value="female" checked={formData.gender === 'female'} onChange={handleChange} /> Female
            </label>
            <label>
              <input type="radio" name="gender" value="other" checked={formData.gender === 'other'} onChange={handleChange} /> Other
            </label>
          </div>
          {errors.gender && <span className="error-message">{errors.gender}</span>}
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
