import React from 'react'
import Header from '../Components/Header'
import Left from '../Components/Inv-Sign-up-components/Left'
import Right from '../Components/Inv-Sign-up-components/Right'
import '../CSS/inv-man-signin-signup.css'
function InvSignUp() {
    return (
        <div id="main1">
            <div id="header1"><Header signup={false} signin={false} home={false} contact={false} about={false} signout={true} search={true}/></div>
            <div id="left1"><Left/></div>
            <div id="right1"><Right/></div>
        </div>
    )
}
export default InvSignUp