function Logout({user, onLogout}) {
    
    function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then(() => onLogout());
        console.log("logged out")
      }

    return(
        <button className="submit" type="submit" onClick={handleLogout} >Logout</button>
    )
}

export default Logout;