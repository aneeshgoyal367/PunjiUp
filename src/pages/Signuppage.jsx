import React from 'react'
import Header from '../Components/Sign-up-components/Header'
import Left from '../Components/Sign-up-components/Left'
import Right from '../Components/Sign-up-components/Right'
function Signuppage (){
    return(
        <div id="main">
            <div id="header"><Header /></div>
            <div id="left"><Left /></div>
            <div id="right"><Right /></div>
        </div>
    )
}
export default Signuppage