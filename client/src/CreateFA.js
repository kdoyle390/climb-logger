import FAForm from './FAForm'

function CreateFA({user}) {
        console.log(user.id)
    return(
        <>
        <div id="create-fa-page">
            
            <FAForm user={user} />
        </div>
        
        </>
    )
}

export default CreateFA;