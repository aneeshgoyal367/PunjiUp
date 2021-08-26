import React from 'react'
import Header from '../Components/Header'
import Mid from '../Components/open-end-components/Mid'

import Bottom from '../Components/open-end-components/Bottom'
// import CloseEndComponent from '../Components/closed-end-components/Bottom'

import '../CSS/openend.css'
function Openend() {
    let islogin=false;
    if (localStorage.token) {
        
        islogin=true;
    }
    return (
        <div>
            <div id="Header"><Header signup={false} signin={!islogin} home={true} contact={true} about={true} signout={islogin} search={true}/></div>
            <div id="Mid"><Mid /></div>

            <div id="Bottom"><Bottom /></div>
           

        </div>
    )
}
export default Openend