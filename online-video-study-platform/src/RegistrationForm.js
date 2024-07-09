import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { StudentContext } from './Pages/StudentContext';
// import './RegistrationForm.css';

const RegistrationForm = () => {
  const { setStudentData } = useContext(StudentContext);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    studentNumber: '',
    phone: '',
    birthDate: '',
    password: '',
    confirmPassword: '',
    profileImage: null,
    role: 'student', // הוספת שדה תפקיד
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const errors = {};
    if (!formData.firstName) errors.firstName = 'First name is required';
    if (!formData.lastName) errors.lastName = 'Last name is required';
    if (!formData.email) errors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email format is invalid';
    if (!formData.studentNumber) errors.studentNumber = 'Student number is required';
    if (isNaN(formData.studentNumber)) errors.studentNumber = 'Student number must be numeric';
    if (!formData.phone) errors.phone = 'Phone number is required';
    if (!formData.birthDate) errors.birthDate = 'Birth date is required';
    if (!formData.password) errors.password = 'Password is required';
    if (formData.password.length < 8) errors.password = 'Password must be at least 8 characters long';
    if (!/[a-zA-Z]/.test(formData.password) || !/\d/.test(formData.password))
      errors.password = 'Password must include letters and numbers';
    if (formData.password !== formData.confirmPassword) errors.confirmPassword = 'Passwords do not match';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setStudentData(formData);
      localStorage.setItem('studentData', JSON.stringify(formData)); // שמירת הנתונים ב-Local Storage
      navigate('/student-area');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const storedData = localStorage.getItem('studentData');
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
          {errors.firstName && <p>{errors.firstName}</p>}
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
          {errors.lastName && <p>{errors.lastName}</p>}
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <label>Student Number</label>
          <input type="text" name="studentNumber" value={formData.studentNumber} onChange={handleChange} />
          {errors.studentNumber && <p>{errors.studentNumber}</p>}
        </div>
        <div>
          <label>Phone Number</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
          {errors.phone && <p>{errors.phone}</p>}
        </div>
        <div>
          <label>Birth Date</label>
          <input type="date" name="birthDate" value={formData.birthDate} onChange={handleChange} />
          {errors.birthDate && <p>{errors.birthDate}</p>}
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div>
          <label>Confirm Password</label>
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
          {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
        </div>
        <div>
          <label>status</label>
          <select name="role" value={formData.role} onChange={handleChange}>
            <option value="student">Student</option>
            <option value="lecturer">Lecturer</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button type="submit">sign up</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
