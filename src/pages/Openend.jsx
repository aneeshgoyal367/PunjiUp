import React from 'react'
import Header from '../Components/Header'
import Mid from '../Components/open-end-components/Mid'
import Showopen from '../Components/open-end-components/Showopen'
import Bottom from '../Components/open-end-components/Bottom'

import '../CSS/openend.css'
function Openend() {
    return (
        <div>
            <div id="Header"><Header signup={false} signin={false} home={false} contact={false} about={false} signout={true} search={true}/></div>
            <div id="Mid"><Mid/></div>
            <div id="Showopen"><Showopen/></div>
            <div id="Bottom"><Bottom/></div>
            
        </div>
    )
}
export default Openend