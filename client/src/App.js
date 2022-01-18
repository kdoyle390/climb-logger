import './App.css';
import Home from './Home'
import CreateFA from './CreateFA'
import LogContainer from './LogContainer'
import RouteContainer from './RouteContainer'
import Login from './Login'
import Signup from './Signup'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

function App() {

  const [routeList, setRouteList] = useState([])

  useEffect(() => {
  fetch('http://localhost:3000/routes')
  .then(resp => resp.json())
  .then(data => setRouteList(data))
}, [])


// should probably handle posting the route data to log
// need access to signed in user's id to post to user's id
  function logRoute(e) {
      console.log("route logged")
      
  }



  return (
    <div className="App">
      <Home />
      <Login />
      <Signup />
      <CreateFA />
      <LogContainer />
      <RouteContainer routeList={routeList} setRouteList={setRouteList}/>
      {/* <nav>
        <Link to='/home'></Link>
      </nav> */}
    </div>
  );
}

export default App;
