import React from 'react'
import Header from '../Components/Header'
import Mid from '../Components/fundmanagerb-components/Mid'
import Showfund from '../Components/fundmanagerb-components/Showfund'
import Bottom from '../Components/fundmanagerb-components/Bottom'

import '../CSS/fundmanagerb.css'
function fundmanager() {
    return (
        <div>
            <div id="Header"><Header signup={false} signin={false} home={false} contact={false} about={false} signout={true} search={true}/></div>
            <div id="Mid"><Mid/></div>
            <div id="Showfund"><Showfund/></div>
            <div id="Bottom"><Bottom/></div>
            
        </div>
    )
}
export default fundmanager