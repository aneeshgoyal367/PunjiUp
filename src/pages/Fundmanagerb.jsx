import React from 'react'
import Header from '../Components/Header'
import Mid from '../Components/fundmanagerb-components/Mid'

import Bottom from '../Components/fundmanagerb-components/Bottom'

import '../CSS/fundmanagerb.css'
function fundmanager() {
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
export default fundmanager