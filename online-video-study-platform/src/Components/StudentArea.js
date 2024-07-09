import { StudentContext } from '../Pages/StudentContext';
import React, { useContext, useState, useEffect } from 'react';
import '../Pages/Styles.css';

const StudentArea = () => {
  const { studentData } = useContext(StudentContext);
  const [profileImagePreview, setProfileImagePreview] = useState(null);
  const [age, setAge] = useState(null);
  const [role, setRole] = useState('student'); // Default role is 'student'

  // Effect to retrieve stored role from localStorage on component mount
  useEffect(() => {
    const storedRole = localStorage.getItem('userRole');
    if (storedRole) {
      setRole(storedRole);
    }
  }, []);

  // Effect to calculate age based on birthDate from studentData
  useEffect(() => {
    if (studentData.birthDate) {
      const birthDate = new Date(studentData.birthDate);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDifference = today.getMonth() - birthDate.getMonth();

      if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }

      setAge(age);
    }
  }, [studentData.birthDate]);

  // Function to handle role change
  const handleRoleChange = (e) => {
    const selectedRole = e.target.value;
    setRole(selectedRole);
    localStorage.setItem('userRole', selectedRole); // Store role preference in localStorage
  };

  // Function to handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
  
    <div className="student-area">
      <div className="profile">
        <h3>Profile Details</h3>
        <div>
          {profileImagePreview || studentData.profileImage ? (
            <img src={profileImagePreview || URL.createObjectURL(studentData.profileImage)} alt="Profile" className="profile-image" />
          ) : (
            <p>No profile image uploaded</p>
          )}
        </div>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <p>First Name: {studentData.firstName}</p>
        <p>Last Name: {studentData.lastName}</p>
        <p>Email Address: {studentData.email}</p>
        <p>Phone Number: {studentData.phone}</p>
        <p>Age: {age !== null ? age : 'Not available'}</p>
        <p>Student Number: {studentData.studentNumber}</p>
      </div>
      <div className="courses">
        <h3>Enrolled Courses</h3>
        <ul>
          {studentData.courses?.map((course) => (
            <li key={course.id}>{course.name}</li>
          ))}
        </ul>
      </div>
      <div className="grades">
        <h3>Grades and Assessments</h3>
        <ul>
          {studentData.grades?.map((grade) => (
            <li key={grade.courseId}>
              {studentData.courses?.find((course) => course.id === grade.courseId)?.name}: {grade.grade}
            </li>
          ))}
        </ul>
      </div>
      <div className="tasks">
        <h3>Tasks and Assignments</h3>
        <ul>
          {studentData.tasks?.map((task) => (
            <li key={task.id}>
              {task.name} - {task.dueDate} - {task.status}
            </li>
          ))}
        </ul>
      </div>
    
    </div>
  );
};

export default StudentArea;

