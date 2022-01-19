import RouteCard from './RouteCard'
import {useState, useEffect} from 'react'
import RouteSearch from './RouteSearch'

function RouteContainer() {

    const [searchTerm, setSearchTerm] = useState("")
    const [routeList, setRouteList] = useState([])


    useEffect(() => {
    fetch('http://localhost:3000/routes')
    .then(resp => resp.json())
    .then(data => setRouteList(data))
  }, [])
const routelistings = routeList.map(route => <RouteCard route={route} key={route.id} handleAddRoute={handleAddRoute} />)
// const searchedRoutes = routeList.filter(route => {
//     return route.name.toLowerCase().includes(searchTerm.toLowerCase()) || route.crag.toLowerCase().includes(searchTerm.toLowerCase())})

function handleAddRoute(newRoute) {
    setRouteList([...routeList, newRoute])
}

    return(
        <div id="route-container">
            <RouteSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            Route container
            {/* {searchedRoutes} */}
            {routelistings}
        </div>
    )
}

export default RouteContainer;