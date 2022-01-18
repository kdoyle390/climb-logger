import RouteCard from './RouteCard'
import {useState, useEffect} from 'react'
import RouteSearch from './RouteSearch'

function RouteContainer({routeList, setRouteList}) {

    const [searchTerm, setSearchTerm] = useState("")


    function handleAddRoute(newRoute) {
        setRouteList([...routeList, newRoute])
    }


// const routelistings = routeList.map(route => <RouteCard route={route} key={route.id} handleAddRoute={handleAddRoute} />)
const searchedRoutes = routeList.filter(route => {
    return route.name.toLowerCase().includes(searchTerm.toLowerCase()) || route.crag.toLowerCase().includes(searchTerm.toLowerCase())})



    return(
        <div id="route-container">
            <RouteSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            Route container
            {searchedRoutes}
        </div>
    )
}

export default RouteContainer;