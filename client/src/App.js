import './App.css';
import Home from './Home'
import CreateFA from './CreateFA'
import LogContainer from './LogContainer'
import FindARoute from './FindARoute'
import Login from './Login'
import Signup from './Signup'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Home />
      <Login />
      <Signup />
      <CreateFA />
      <LogContainer />
      <FindARoute />
      {/* <nav>
        <Link to='/home'></Link>
      </nav> */}
    </div>
  );
}

export default App;
