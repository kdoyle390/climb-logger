function FAForm() {
    return(
        <div id="fa-form-container">
            <form id="fa-form">
                <label for="gymq">Is this a gym route? </label>
                <input type="radio" name="gymq"></input>
                <label for="yes" name="gymq">Yes</label>
                <input type="radio"></input>
                <label for="no">No</label>

                <label for="date-sent">First Ascent Date: </label>
                <input type="date" name="date-sent"></input>

                <label for="type">Route Type: </label>
                <select id="type" name="type">
                    <option value="boulder">Boulder</option>
                    <option value="lead">Lead</option>
                    <option value="top-rope">Toprope</option>
                </select>

                <label for="grade"> Grade: </label>
                <select id="grade" name="grade">
                    <option value="VB">VB</option>
                    <option value="VB">V0</option>
                    <option value="VB">V1</option>
                    <option value="VB">V2</option>
                    <option value="VB">V3</option>
                    <option value="VB">V4</option>
                    <option value="VB">V5</option>
                    <option value="VB">V6</option>
                    <option value="VB">V7</option>
                    <option value="VB">V8</option>
                    <option value="VB">V9</option>
                    <option value="VB">V10</option>
                    <option value="VB">V11</option>
                    <option value="VB">V12</option>
                    <option value="VB">V13</option>
                    <option value="VB">V14</option>
                    <option value="VB">V15</option>
                    <option value="VB">5.6</option>
                    <option value="VB">5.7</option>
                    <option value="VB">5.8</option>
                    <option value="VB">5.9</option>
                    <option value="VB">5.10a</option>
                    <option value="VB">5.10b</option>
                    <option value="VB">5.10c</option>
                    <option value="VB">5.10d</option>
                    <option value="VB">5.11a</option>
                    <option value="VB">5.11b</option>
                    <option value="VB">5.11c</option>
                    <option value="VB">5.11d</option>
                    <option value="VB">5.12a</option>
                    <option value="VB">5.12b</option>
                    <option value="VB">5.12c</option>
                    <option value="VB">5.12d</option>
                    <option value="VB">5.13a</option>
                    <option value="VB">5.13b</option>
                    <option value="VB">5.13c</option>
                    <option value="VB">5.13d</option>
                    <option value="VB">5.14a</option>
                    <option value="VB">5.14b</option>
                    <option value="VB">5.14c</option>
                    <option value="VB">5.14d</option>
                    <option value="VB">5.15a</option>
                    <option value="VB">5.15b</option>
                    <option value="VB">5.15c</option>
                    <option value="VB">5.15d</option>
                </select>

                <label for="name">Name your Route: </label>
                <input type="text" placeholder="name"></input> 
                <label for="notes">Notes: </label>
                <input id="comment-box" type="textarea" name="notes" placeholder="Leave some notes about your route. Directions to the route, tipes, crux info, etc."></input>
                
                <label for="country">Country: </label>
                <input type="text" name="country"></input>
                
                <label for="crag">Crag Name: </label>
                <input type="text" name="crag"></input>
                
                <label for="coordinates">Coordinates: </label>
                <input type="text" name="coordinates"></input>

                <input type="submit"></input>
            
            
            </form>
        </div>
    )
}
export default FAForm;