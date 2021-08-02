import React from 'react'
import Header from '../Components/Inv-Sign-in-components/Header'
import Left from '../Components/Inv-Sign-in-components/Left'
import Right from '../Components/Inv-Sign-in-components/Right'
import '../CSS/inv-man-signin-signup.css'
function InvSignIn() {
    return (
        <div id="main">
            <div id="header"><Header /></div>
            <div id="left"><Left/></div>
            <div id="right"><Right /></div>
        </div>
    )
}
export default InvSignIn