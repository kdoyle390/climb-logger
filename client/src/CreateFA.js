import FAForm from './FAForm'

function CreateFA({user}) {
    console.log('user info from logged in user hopefully prints below')
    console.log(user)
    return(
        <>
        <div id="create-fa-page">
            
            <FAForm />
        </div>
        
        </>
    )
}

export default CreateFA;