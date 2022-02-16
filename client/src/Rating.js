import React, {useState} from 'react'
import Star from './Star';


function Rating({ onChange, routeid }) {

const [rating, setRating] = useState(0)
const starRating = [1, 2, 3, 4, 5]


const changeRating = (newRating) => {
    setRating(newRating);
    onChange?.(newRating);
}

function handleSaveRating(e) {
    e.preventDefault()
    console.log("submit clicked")
    console.log(routeid)
    const ratingData = {
        user_id: 3,
        route_id: routeid,
        rating: rating
    }
    fetch("http://localhost:3000/ratings", {
        method: "POST",
        headers: {"Content-Type": "application/json",
    },
        body: JSON.stringify(ratingData),
    })
    .then(res => res.json())
    .then(newRating => console.log(newRating))
}



    return(
       <>
        <div className="star-rating">
            {starRating.map((value) => (
                <Star key={value}
                filled={value <= rating}
                onClick={ () => changeRating(value)} 
                />
            ))}
        <button className="save" onClick={(e) => handleSaveRating(e)}>Save Rating</button>
        </div>
       </>
    )
}

export default Rating