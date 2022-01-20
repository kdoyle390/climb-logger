import {useState} from 'react'

function Signup() {

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
    
  
    function handleSubmit(e) {
        e.preventDefault()
        const userData = {
            first_name: firstName,
            last_name: lastName, 
            email: email,
            password: password
        };
        fetch("/users", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        })
        .then((r)=> r.json())
        .then((newUser) => console.log(newUser))
    }

    return(
        <div id="signup">
            <form id='signup-form' onSubmit={handleSubmit}>
                <p>
                    <label for="first-name">First name: </label>
                    <input type="text" name="first-name" onChange={(e) => setFirstName(e.target.value)} value={firstName}></input>
                </p>
                <p>
                    <label for="last-name">Last name: </label>
                    <input type="text" name="last-name" onChange={(e) => setLastName(e.target.value)} value={lastName}></input>
                </p>
                <p>
                    <label for="email">Email address:</label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} value={email}></input>
                </p>
                <p>
                    <label for="password">Password: </label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} value={password}></input>
                </p>
                <p>
                    <label for="confirm-password">Confirm password:</label>
                    <input type="password"></input>
                </p>
                    <input className="submit" type="submit"></input>
            </form>
        </div>
    )
}

export default Signup;