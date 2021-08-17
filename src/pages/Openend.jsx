import React from 'react'
import Header from '../Components/Header'
import Mid from '../Components/open-end-components/Mid'

import Bottom from '../Components/open-end-components/Bottom'

import '../CSS/openend.css'
function Openend() {
    return (
        <div>
            <div id="Header"><Header signup={false} signin={false} home={true} contact={false} about={false} signout={false} search={true}/></div>
            <div id="Mid"><Mid/></div>
            
            <div id="Bottom"><Bottom/></div>
            
        </div>
    )
}
export default Openend