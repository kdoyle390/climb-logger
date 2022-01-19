import { FaStar } from 'react-icons/fa';

function Star({ filled, onClick }) {


    return(
        <FaStar
            color={filled ? "yellow" : "grey"}
            onMouseOver={(e) => filled ? "yellow" : "lgrey"}
            onClick={onClick} />
    )
}

export default Star;