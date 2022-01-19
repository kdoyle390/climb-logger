import { useState } from 'react'

function FAForm({handleAddRoute}) {

// need to figure out how to handle radio buttons on submit and how to grab user's id when adding route
// need to also figure out how to get the id values and to have them appear as ints in state

const [gradeId, setGradeId] = useState(null)
const [typeId, setTypeId] = useState(null)
const [userId, setUserId] = useState(1)
const [name, setName] = useState("")
const [country, setCountry] = useState("")
const [crag, setCrag] = useState("")
const [comments, setComments] = useState("")
const [coordinates, setCoordinates] = useState("")
const [gymRoute, setGymRoute] = useState(null)

 

    function handleSubmit(e) {
        e.preventDefault()

        const routeData = {
            grade_id: gradeId,
            type_id: typeId, 
            user_id: userId,
            name: name,
            country: country,
            crag: crag,
            comments: comments,
            coordinates: coordinates,
            gym_route: gymRoute
        };
        fetch('/routes', {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(routeData),
        })
        .then((r)=> r.json())
        .then((newRoute) => console.log(newRoute))
    }

    return(
        <div id="fa-form-container">
            <form id="fa-form" onSubmit={handleSubmit}>
                <label for="gymq">Is this a gym route? </label>
                <input type="radio" value={gymRoute} onChange={(e) => setGymRoute(true)} name="gymq"></input>
                <label for="yes">Yes</label>
                <input type="radio" value={gymRoute} onChange={(e) => setGymRoute(false)} name="gymq"></input>
                <label for="no">No</label>

                {/* <label for="date-sent">First Ascent Date: </label>
                <input type="date" name="date-sent" value={date} onChange={(e)=> setName(e.target.value)}></input> */}

                <label for="type">Route Type: </label>
                <select id="type" name="type" onChange={(e) => setTypeId(e.target.value)}>
                    <option></option>
                    <option value={1}>Boulder</option>
                    <option value={2}>Lead</option>
                    <option value={3}>Toprope</option>
                </select>

                <label for="grade"> Grade: </label>
                <select id="grade" name="grade" onChange={(e) => setGradeId(e.target.value)}>
                    <option></option>
                    <option value={1}>VB</option>
                    <option value={2}>V0</option>
                    <option value={3}>V1</option>
                    <option value={4}>V2</option>
                    <option value={5}>V3</option>
                    <option value={6}>V4</option>
                    <option value={7}>V5</option>
                    <option value={8}>V6</option>
                    <option value={9}>V7</option>
                    <option value={10}>V8</option>
                    <option value={11}>V9</option>
                    <option value={12}>V10</option>
                    <option value={13}>V11</option>
                    <option value={14}>V12</option>
                    <option value={15}>V13</option>
                    <option value={16}>V14</option>
                    <option value={17}>V15</option>
                    <option value={18}>5.6</option>
                    <option value={19}>5.7</option>
                    <option value={20}>5.8</option>
                    <option value={21}>5.9</option>
                    <option value={22}>5.10a</option>
                    <option value={23}>5.10b</option>
                    <option value={24}>5.10c</option>
                    <option value={25}>5.10d</option>
                    <option value={26}>5.11a</option>
                    <option value={27}>5.11b</option>
                    <option value={28}>5.11c</option>
                    <option value={29}>5.11d</option>
                    <option value={30}>5.12a</option>
                    <option value={31}>5.12b</option>
                    <option value={32}>5.12c</option>
                    <option value={33}>5.12d</option>
                    <option value={34}>5.13a</option>
                    <option value={35}>5.13b</option>
                    <option value={36}>5.13c</option>
                    <option value={37}>5.13d</option>
                    <option value={38}>5.14a</option>
                    <option value={39}>5.14b</option>
                    <option value={40}>5.14c</option>
                    <option value={41}>5.14d</option>
                    <option value={42}>5.15a</option>
                    <option value={43}>5.15b</option>
                    <option value={44}>5.15c</option>
                    <option value={45}>5.15d</option>
                </select>

                <label for="name">Name your Route: </label>
                <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)}></input> 

                <label for="notes">Notes: </label>
                <input id="comment-box" type="textarea" name="notes" 
                placeholder="Leave some notes about your route. Directions to the route, tipes, crux info, etc." 
                value={comments}
                onChange={(e) => setComments(e.target.value)}></input>
                
                <label for="country">Country: </label>
                <input type="text" name="country" value={country} onChange={(e) => setCountry(e.target.value)}></input>
                
                <label for="crag">Crag Name: </label>
                <input type="text" name="crag" value={crag} onChange={(e) => setCrag(e.target.value)}></input>
                
                <label for="coordinates">Coordinates: </label>
                <input type="text" name="coordinates" vaue={coordinates} onChange={(e) => setCoordinates(e.target.value)}></input>

                <input type="submit"></input>
            
            
            </form>
        </div>
    )
}
export default FAForm;