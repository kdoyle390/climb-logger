function Signup() {
    return(
        <div id="signup">
            <form id='signup-form'>
                <label for="first-name">First name: </label>
                <input type="text" name="first-name"></input>
                <label for="last-name">Last name: </label>
                <input type="text" name="last-name"></input>
                <label for="email">Email address:</label>
                <input type="email"></input>
                <label for="password">Password: </label>
                <input type="password"></input>
                <label for="confirm-password">Confirm password:</label>
                <input type="password"></input>
            </form>
        </div>
    )
}

export default Signup;