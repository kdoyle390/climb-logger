import RouteCard from './RouteCard'
import {useState, useEffect} from 'react'
import RouteSearch from './RouteSearch'

function RouteContainer({user}) {

    const [searchTerm, setSearchTerm] = useState("")
    const [routeList, setRouteList] = useState([])


    useEffect(() => {
    fetch('http://localhost:3000/routes')
        .then(resp => resp.json())
        .then(data => setRouteList(data))
  }, [])

const searchedRoutes = routeList.filter(route => {
    return route.name.toLowerCase().includes(searchTerm.toLowerCase()) || route.crag.toLowerCase().includes(searchTerm.toLowerCase())})
const returnedRoutes = searchedRoutes.map(route => <RouteCard route={route} key={route.id} handleAddRoute={handleAddRoute} user={user} />)

function handleAddRoute(newRoute) {
    setRouteList([...routeList, newRoute])
}

    return(
        <div id="route-container">
            <RouteSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            
            {returnedRoutes}

        </div>
    )
}

export default RouteContainer;