import './App.css';
import Home from './Home'
import CreateFA from './CreateFA'
import LogContainer from './LogContainer'
import RouteContainer from './RouteContainer'
import Login from './Login'
import Logout from './Logout'
import Signup from './Signup'
// "Switch" appears unused below but app crashes if removed from list
import { BrowserRouter as Switch, Routes, Route, Link } from "react-router-dom"
import { useEffect, useState } from 'react'

function App() {

  
  const [user, setUser] = useState(null);


  useEffect(() => {
    fetch("/me").then((resp) => {
      if (resp.ok) {
        resp.json()
          .then((user) => setUser(user));
      }
    });
  }, []);

function handleLogin(user) {
  setUser(user);
  console.log(user)
}

function handleLogout() {
  setUser(null)
}

  return (
  <>
    <div className="header">
    <a className="page-links">
          <Link to="/login">Login</Link>
        </a>
        <a className="page-links">
          <Link to="/logout">Logout</Link>
        </a>
        <a className="page-links">
          <Link to="/signup">Signup</Link>
        </a>
      <h1>Cl!mb</h1>
    </div>
    

    <nav id="navbar">    
        <a className="page-links">
          <Link to="/">Home</Link>
        </a>

        <a className="page-links">
          <Link to="/search">Find a Route</Link>
        </a>
        <a className="page-links">
          <Link to="/create-route">Create a First Ascent</Link>
        </a>
        <a className="page-links">
          <Link to="/logs">Your Log</Link>
        </a>
        

    </nav>
    {/* route handling */}
      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/logout" element={<Logout onLogout={handleLogout} user={user} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/create-route" element={<CreateFA user={user} />} />
        <Route path="/logs" element={<LogContainer user={user} />} />
        <Route path="/search" element={<RouteContainer user={user} />} />
      </Routes>


   
  </>
  );
}

export default App;
