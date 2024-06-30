import logo from './logo.svg';
import './App.css';
import RegistrationForm from './RegistrationForm';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
  <Router>
    <div className="App">
      <Routes>
          <Route
            path="/"
            element={
              <div>
                <h1>Welcome to Our Site</h1>
                <Link to="/register">
                  <button>Go to Registration Form</button>
                </Link>
              </div>
            }
          />
          <Route path="/register" element={<RegistrationForm />} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
