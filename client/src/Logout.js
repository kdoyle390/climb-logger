function Logout({onLogout}) {
    
    function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then(() => onLogout());
      }

    return(
        <button type="submit" onSubmmit={handleLogout} >Logout</button>
    )
}

export default Logout;