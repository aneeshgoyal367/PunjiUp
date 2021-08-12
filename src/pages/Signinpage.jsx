import React from 'react'
import Header from '../Components/Sign-in-components/Header'
import Left from '../Components/Sign-in-components/Left'
import Right from '../Components/Sign-in-components/Right'
function Signinpage() {
    return (
        <div id="main">
            <div id="header"><Header /></div>
            <div id="left"><Left /></div>
            <div id="right"><Right /></div>
        </div>
    )
}
export default Signinpage