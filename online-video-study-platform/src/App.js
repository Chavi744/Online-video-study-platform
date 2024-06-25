import React from 'react';
import './App.css';
import LoginForm from './Components/Login/LoginForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Login Page</h1>
      </header>
      <main>
        <LoginForm />
      </main>
    </div>
  );
}

export default App;
