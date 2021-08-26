import React from 'react'
import Header from '../Components/Header'
import Left from '../Components/Sign-in-components/Left'
import Right from '../Components/Sign-in-components/Right'
import '../CSS/SigninSignup.css'
function Signinpage() {
    let islogin=false;
    if (localStorage.token) {
        
        islogin=true;
    }
    return (
        <div id="main">
           <div id="Header"><Header signup={false} signin={!islogin} home={true} contact={true} about={true} signout={islogin} search={false}/></div>
            <div id="left"><Left /></div>
            <div id="right"><Right /></div>
        </div>
    )
}
export default Signinpage