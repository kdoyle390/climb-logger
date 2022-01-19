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
    <nav id="navbar">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/create-route">Create a First Ascent</Link>
      <Link to="/logs">Your Log</Link>
      <Link to="/search">Find a Route</Link>
    </nav>
      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/create-route" element={<CreateFA />} />
        <Route path="/logs" element={<LogContainer />} />
        <Route path="/search" element={<RouteContainer />} />
      </Routes>


    {/* // <div>
      
    //     <Home />
    //     <Login />
    //     <Signup />
    //     <CreateFA />
    //     <LogContainer />
    //     <RouteContainer routeList={routeList} setRouteList={setRouteList}/>
        

    //  </div>  */}
  </>
  );
}

export default App;
