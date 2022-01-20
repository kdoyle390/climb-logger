function Logout({onLogout}) {
    
    function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then(() => onLogout());
      }

    return(
        <button className="submit" type="submit" onSubmmit={handleLogout} >Logout</button>
    )
}

export default Logout;