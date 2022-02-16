function LogCard({log: {name, crag, country, type, grade, comments}}) {
    return(
        <div id="log-card">

            <div id="log-name">{name} </div>
                <div className="log-fields">
                    <h5>Route info:</h5>
                    <p> {comments} </p>
                </div>
                <div className="log-fields">
                    <h5>Crag:</h5>
                    <p> {crag} </p>
                </div>
                <div className="log-fields">
                    <h5>Country:</h5>
                    <p> {country} </p>
            </div>
        </div>
    )

}

export default LogCard;