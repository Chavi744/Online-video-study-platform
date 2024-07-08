import React, { useState } from 'react';
import './LoginForm.css'; // CSS for styling

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle authentication, e.g., sending data to a server
    console.log('Username:', username);
    console.log('Password:', password);
    // Reset fields after submission (optional)
    setUsername('');
    setPassword('');
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={handleUsernameChange}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
