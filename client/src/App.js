import './App.css';
import Home from './Home'
import CreateFA from './CreateFA'
import LogContainer from './LogContainer'
import RouteContainer from './RouteContainer'
import Login from './Login'
import Logout from './Logout'
import Signup from './Signup'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { useEffect, useState } from 'react'

function App() {

  
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user))
        .then(console.log(user));
        
      }
    });
  }, []);

function handleLogin(user) {
  setUser(user);
  console.log('handlelogin ran')
  console.log(user)
}

function onLogout() {
  setUser(null)
}

  return (
  <>
    <div className="header">
      <h1>Climb Logger</h1>
    </div>

    {/* <Login onLogin={handleLogin}/> */}
    <nav id="navbar">    
        <a className="page-links">
          <Link to="/">Home</Link>
        </a>
        <a className="page-links">
          <Link to="/login">Login</Link>
        </a>
        <a className="page-links">
          <Link to="/logout">Logout</Link>
        </a>
        <a className="page-links">
          <Link to="/signup">Signup</Link>
        </a>
        <a className="page-links">
          <Link to="/create-route">Create a First Ascent</Link>
        </a>
        <a className="page-links">
          <Link to="/logs">Your Log</Link>
        </a>
        <a className="page-links">
          <Link to="/search">Find a Route</Link>
        </a>

    </nav>
      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/logout" element={<Logout onLogout={onLogout} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/create-route" element={<CreateFA user={user} />} />
        <Route path="/logs" element={<LogContainer user={user} />} />
        <Route path="/search" element={<RouteContainer />} />
      </Routes>


   
  </>
  );
}

export default App;
