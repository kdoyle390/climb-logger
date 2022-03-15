import LogCard from './LogCard'
import { useState, useEffect } from 'react'

function LogContainer({user, loggedIn}) {

    const [logList, setLogList] = useState([])
    
// GETs all of a user's logs
    useEffect(() => {
    fetch('/logs')
    .then(resp => resp.json())
    .then(data => setLogList(data))
  }, [])

console.log(user)

const filteredlistings = logList.filter(log => user.id === log.user_id)
console.log(filteredlistings)
const loglistings = filteredlistings.map(log => <LogCard key={log.id} log={log} user={user} />)

    return(
        <div id="log-container">
            <p></p>
            {loggedIn ? <p>Please log in to view your logged climbs</p> : loglistings}
        </div>
    )
}

export default LogContainer;