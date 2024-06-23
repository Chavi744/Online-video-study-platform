// import logo from './logo.svg';
import './App.css';
import Login from './components/Login/login';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Home/>
    
        <Login />
    </div></div>
  );
}

export default App;