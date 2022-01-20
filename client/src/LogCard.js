function LogCard({log, user}) {
    return(
        <div id="log-card">
            Route Id:{log.route_id}
            Route logged by: {user.first_name}
        </div>
    )

}

export default LogCard;