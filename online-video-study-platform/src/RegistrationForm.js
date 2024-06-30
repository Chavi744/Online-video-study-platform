// src/RegistrationForm.js
import React, { useState } from 'react';
import './RegistrationForm.css';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    studentNumber: '',
    email: '',
  });

  const [errors, setErrors] = useState({
    name: false,
    studentNumber: false,
    email: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (value.trim() !== '') {
      setErrors({
        ...errors,
        [name]: false,
      });
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: formData.name.trim() === '',
      studentNumber: formData.studentNumber.trim() === '',
      email: formData.email.trim() === '',
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted successfully!', formData);
      // You can send formData to your backend here
    }
  };

  return (
    <div className="App">
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? 'error' : ''}
          />
          {errors.name && <span className="error-message">Name is required</span>}
        </div>
        <div className="form-group">
          <label htmlFor="studentNumber">Student Number</label>
          <input
            type="text"
            id="studentNumber"
            name="studentNumber"
            value={formData.studentNumber}
            onChange={handleChange}
            className={errors.studentNumber ? 'error' : ''}
          />
          {errors.studentNumber && <span className="error-message">Student Number is required</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <span className="error-message">Email is required</span>}
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
