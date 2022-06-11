import LogCard from './LogCard'
import { useState, useEffect } from 'react'

function LogContainer({user, loggedIn}) {

    const [logList, setLogList] = useState([])
    
// GETs all of a user's logs
    useEffect(() => {
    fetch('http://localhost:3000/logs')
    .then(resp => resp.json())
    .then(data => setLogList(data))
  }, [])

console.log(user)

const filteredlistings = logList.filter(log => user.id === log.user_id)
console.log(filteredlistings)
const loglistings = filteredlistings.map(log => <LogCard key={log.id} log={log} user={user} />)
const requestLogin = <p>Please log in to view your logged climbs</p>

    return(
        <div id="log-container">
            <p>
            {loggedIn ? requestLogin : loglistings}
            </p>
            
        </div>
    )
}

export default LogContainer;