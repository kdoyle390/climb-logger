function Login() {
    return(
        <div id="login">
            <form>
                <label for="user-email">Email: </label>
                <input type="email" name="user-email"></input>
                <label for="password">Password: </label>
                <input type="password" name="password"></input>
            </form>
        </div>
    )
}

export default Login;