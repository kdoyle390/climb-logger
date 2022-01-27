function LogCard({log, user}) {
    return(
        <div id="log-card">
            Route:{log.name}
            Crag: {log.crag}
            Country: {log.country}
            Type: {log.type_id}
            Grade: {log.grade_id}
            
        </div>
    )

}

export default LogCard;