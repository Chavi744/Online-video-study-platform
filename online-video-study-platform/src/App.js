import logo from './logo.png';
import './App.css';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          hello world test
        </p>
        <Login />
      </header>
    </div>
  );
}

export default App;