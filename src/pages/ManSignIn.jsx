import React from 'react'
import Header from '../Components/Header'
import Left from '../Components/Man-Sign-in-components/Left'
import Right from '../Components/Man-Sign-in-components/Right'
import '../CSS/inv-man-signin-signup.css'
function ManSignIn() {
    let islogin=false;
    if (localStorage.token) {
        
        islogin=true;
    }
    return (
        <>
            <div id="Header"><Header signup={false} signin={!islogin} home={true} contact={true} about={true} signout={islogin} search={false}/></div>
            <div id="main1">
            <div id="left1"><Left/></div>
            <div id="right1"><Right /></div>
        </div>
        </>
    )
}
export default ManSignIn