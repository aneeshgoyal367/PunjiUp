import React from 'react'
import Header from '../Components/Header'
import Left from '../Components/Man-Sign-in-components/Left'
import Right from '../Components/Man-Sign-in-components/Right'
import '../CSS/inv-man-signin-signup.css'
function ManSignIn() {
    return (
        <div id="main1">
            <div id="header1"><Header signup={false} signin={false} home={false} contact={false} about={false} signout={true} search={true}/></div>
            <div id="left12"><Left/></div>
            <div id="right1"><Right /></div>
        </div>
    )
}
export default ManSignIn