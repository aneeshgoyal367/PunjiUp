import React from 'react'
import Header from '../Components/Header'
import Bottom from '../Components/contact-us-components/Bottom'

import '../CSS/Contactus.css'
function Contactus() {
    let islogin=false;
    if (localStorage.token) {
        
        islogin=true;
    }
    return (
        <div>
            <div id="Header"><Header signup={false} signin={!islogin} home={true} contact={false} about={false} signout={islogin} search={true}/></div>
            <div id="Bottom"><Bottom/></div>
            
        </div>
    )
}
export default Contactus