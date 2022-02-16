
function RouteSearch({searchTerm, setSearchTerm}) {

    return(
        <div id='route-search-container'>
            <div id='route-search'>
                <p>Search for a Route by Name or Crag</p>
                <form>
                    <input type="text" placeholder="Find a route..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} ></input>
                    
                </form>

            </div>
        </div>
    )

}

export default RouteSearch;