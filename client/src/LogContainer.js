import LogCard from './LogCard'
import { useState, useEffect } from 'react'

function LogContainer({user}) {

    const [logList, setLogList] = useState([])


    useEffect(() => {
    fetch('http://localhost:3000/logs')
    .then(resp => resp.json())
    .then(data => setLogList(data))
  }, [])

console.log(user)

const filteredlistings = logList.filter(log => user.id == log.user_id)
console.log(filteredlistings)
const loglistings = filteredlistings.map(log => <LogCard key={log.id} log={log} user={user} />)

    return(
        <div id="log-container">
            Log Container
            {loglistings}
        </div>
    )
}

export default LogContainer;