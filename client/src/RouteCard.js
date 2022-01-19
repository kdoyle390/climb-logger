import Rating from './Rating'

function RouteCard({route: {id, name, comments, grade_id, user_id, grade}, logRoute}) {
    

    return (
        <div id="route-card">
            <div id="route-name">{name} </div>
            <div id ="route-info">Route info: {comments} </div>
            <div id="route-grade"> Route grade: {grade}</div>
            <div id="user-info">First logged by: {user_id}</div>
            <button type="submit" onClick={(e) => logRoute()}>Log this Route</button>
        <Rating />
        </div>
    )
}

export default RouteCard;