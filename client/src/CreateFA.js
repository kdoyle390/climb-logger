import FAForm from './FAForm'

function CreateFA({user}) {

    // add state to see if user is logged in and if yes, render
    // if not render div that says "Please log in to add a route"

        
    return(
        <>
        <div id="create-fa-page">
            
            <FAForm user={user} />
        </div>
        
        </>
    )
}

export default CreateFA;