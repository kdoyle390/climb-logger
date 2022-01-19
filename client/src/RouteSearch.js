import { useState } from 'react'


function RouteSearch({routeList, searchTerm, setSearchTerm}) {


// currently not searching when submit is hit. maybe that's fine and what I want? Do I want them to render automatically? 


    return(
        <div id='route-search'>
            <p>Search for a Route by...</p>
            <form>
                <input type="text" placeholder="Find a route..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} ></input>
                <button>Search</button>
            </form>

        </div>
    )

}

export default RouteSearch;