import Rating from './Rating'

function RouteCard({route: {id, name, comments, grade_id, user_id, type_id, country, crag, coordinates, gym_route}, user}) {
 
    // need to update current_user to be the id of the user currently logged in
  const current_user = 5;

    function logRoute(e) {
        e.preventDefault()

        const logData = {
            route_id: id,
            user_id: user.id,
            type_id: type_id,
            grade_id: grade_id,
            name: name,
            country: country, 
            crag: crag,
            comments: comments,
            coordinates: coordinates,
            gym_route: gym_route
        };
        fetch('/logs', {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(logData),
        })
        .then((r)=> r.json())
        .then((newLog) => console.log(newLog))
    }

    return (
        <div id="route-card">
            <div id="route-name">{name} </div>
                <div className="route-fields">
                    <h5>Route info:</h5>
                    <p> {comments} </p>
                </div>
                <div className="route-fields">
                    <h5>Crag:</h5>
                    <p> {crag} </p>
                </div>
                <div className="route-fields">
                    <h5>Country:</h5>
                    <p> {country} </p>
                </div>
                <div className="route-fields">
                    <h5>Route grade:</h5>
                    <p> {grade_id.grade} </p>
                </div>
                <div className="route-fields">
                    <h5>Created by:</h5>
                    <p>{user}</p>
                </div>
            <button className="save" type="submit" onClick={(e) => logRoute(e)}>Log this Route</button>
        <Rating routeid={id} />
        </div>
    )
}

export default RouteCard;