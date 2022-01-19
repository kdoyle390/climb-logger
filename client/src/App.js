import './App.css';
import Home from './Home'
import CreateFA from './CreateFA'
import LogContainer from './LogContainer'
import RouteContainer from './RouteContainer'
import Login from './Login'
import Signup from './Signup'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { useEffect, useState } from 'react'

function App() {

  
  const [user, setUser] = useState(null);

function handleLogin(user) {
  setUser(user);
}


// should probably handle posting the route data to log
// need access to signed in user's id to post to user's id
  function logRoute(e) {
      console.log("route logged")
      
  }

  return (
  <>
    <div className="header">
      <h1>Climb Logger</h1>
    </div>
    <nav id="navbar">    
        <a className="page-links">
          <Link to="/">Home</Link>
        </a>
        <a className="page-links">
          <Link to="/login">Login</Link>
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
        <Route path="/signup" element={<Signup />} />
        <Route path="/create-route" element={<CreateFA />} />
        <Route path="/logs" element={<LogContainer />} />
        <Route path="/search" element={<RouteContainer />} />
      </Routes>


   
  </>
  );
}

export default App;
