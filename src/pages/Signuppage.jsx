import React from 'react'
import Header from '../Components/Header'
import Left from '../Components/Sign-up-components/Left'
import Right from '../Components/Sign-up-components/Right'
function Signuppage (){
    return(
        <div id="main">
            <div id="header"><Header signup={false} signin={false} home={false} contact={false} about={false} signout={true} search={true}/></div>
            <div id="left"><Left /></div>
            <div id="right"><Right /></div>
        </div>
    )
}
export default Signuppage