import Rating from './Rating'

function RouteCard({route: {id, name, comments, grade_id, user_id, grade, user, type_id, country, crag, coordinates, gym_route}}) {
 
    // need to update current_user to be the id of the user currently logged in
  const current_user = 5;

    function logRoute(e) {
        e.preventDefault()

        const logData = {
            route_id: id,
            user_id: current_user,
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
            <div id ="route-info">Route info: {comments} </div>
            <div id="route-grade"> Route grade: {grade_id}</div>
            <div id="user-info">First logged by: {user_id}</div>
            <button type="submit" onClick={(e) => logRoute(e)}>Log this Route</button>
        <Rating routeid={id} />
        </div>
    )
}

export default RouteCard;