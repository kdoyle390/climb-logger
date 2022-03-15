import { useState } from 'react';

function Login({ onLogin}) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
   

    function handleSubmit(e) {
        e.preventDefault()
        fetch("http://localhost:3000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }).then((resp) => {
          if (resp.ok) {
            resp.json().then((user) => onLogin(user));
          }
        });
        console.log('function ran')
        // setEmail('')
        // setPassword('')
        // setLoggedIn(true)
      }

// function returnuser() {
//         fetch('http://localhost:3000/me') 
//         .then(resp => resp.json())
//         .then(data => console.log(data))
// }    

    return(
        <div id="login">
            <form onSubmit={handleSubmit}>
              <p>
                <label for="user-email">Email: </label>
                <input type="email" name="user-email" value={email} onChange={(e)=> setEmail(e.target.value)}></input>
              </p>  
              <p>
                <label for="password">Password: </label>
                <input type="password" name="password" value={password} onChange={(e)=> setPassword(e.target.value)}></input>
              </p>
                <button className="submit" type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;