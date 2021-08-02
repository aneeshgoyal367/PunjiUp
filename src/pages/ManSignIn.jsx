import React from 'react'
import Header from '../Components/Man-Sign-in-components/Header'
import Left from '../Components/Man-Sign-in-components/Left'
import Right from '../Components/Man-Sign-in-components/Right'
import './CSS/inv-man-signin-signup.css'
function ManSignIn() {
    return (
        <div id="main">
            <div id="header"><Header /></div>
            <div id="left"><Left/></div>
            <div id="right"><Right /></div>
        </div>
    )
}
export default ManSignIn