import React from 'react'
import Header from '../Components/Header'
import Left from '../Components/Inv-Sign-in-components/Left'
import Right from '../Components/Inv-Sign-in-components/Right'
import '../CSS/inv-man-signin-signup.css'
function InvSignIn() {
    return (
        <>
            <Header signup={false} signin={false} home={true} contact={false} about={false} signout={false} search={false}></Header>
            <div id="main1">
                <div id="left1"><Left /></div>
                <div id="right1"><Right /></div>
            </div>
        </>
    )
}
export default InvSignIn