import { useState } from 'react';

function Login({ onLogin }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:3000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }).then((r) => {
          if (r.ok) {
            r.json().then((user) => onLogin(user));
          }
        });
      }

    return(
        <div id="login">
            <form onSubmit={handleSubmit}>
                <label for="user-email">Email: </label>
                <input type="email" name="user-email" value={email} onChange={(e)=> setEmail(e.target.value)}></input>
                <label for="password">Password: </label>
                <input type="password" name="password" value={password} onChange={(e)=> setPassword(e.target.value)}></input>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;