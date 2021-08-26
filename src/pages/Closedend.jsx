import React from 'react'
import Header from '../Components/Header'
import Bottom from '../Components/closed-end-components/Bottom'
import Mid from '../Components/closed-end-components/Mid'

import '../CSS/closeend.css'
function Closedend() {
    let islogin=false;
    if (localStorage.token) {
        
        islogin=true;
    }
    return (
        <div>
            <div id="Header"><Header signup={false} signin={!islogin} home={true} contact={true} about={true} signout={islogin} search={true}/></div>
            <div id="Mid"><Mid/></div>
            <div id="Bottom"><Bottom/></div>
            
        </div>
    )
}
export default Closedend