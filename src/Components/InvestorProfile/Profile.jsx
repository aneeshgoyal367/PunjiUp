import React from 'react'
function Profile (){
    return(
        <div>
            This is inner profile page.
            <form>
                <label  htmlFor='firstname'>First Name: </label>
                <input type="text" defaultValue="Neelmani" id="firstname"></input>
                <br/><br/>
                <label  htmlFor='lastname'>Last Name: </label>
                <input type="text" defaultValue="Singh" id="lastname"></input>
            </form>
        </div>
    );
}
export default Profile;