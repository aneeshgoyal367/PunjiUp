import React from 'react'
import Header from '../Components/Header'
import Left from '../Components/Sign-in-components/Left'
import Right from '../Components/Sign-in-components/Right'
import '../CSS/SigninSignup.css'
function Signinpage() {
    return (
        <div id="main">
            <div id="header"><Header signup={false} signin={false} home={false} contact={false} about={false} signout={true} search={true}/></div>
            <div id="left"><Left /></div>
            <div id="right"><Right /></div>
        </div>
    )
}
export default Signinpage