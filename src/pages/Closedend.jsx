import React from 'react'
import Header from '../Components/Header'
import Bottom from '../Components/closed-end-components/Bottom'
import Mid from '../Components/closed-end-components/Mid'

import '../CSS/closeend.css'
function Closedend() {
    return (
        <div>
            <div id="Header"><Header signup={false} signin={false} home={false} contact={false} about={false} signout={true} search={true}/></div>
            <div id="Mid"><Mid/></div>
            <div id="Bottom"><Bottom/></div>
            
        </div>
    )
}
export default Closedend