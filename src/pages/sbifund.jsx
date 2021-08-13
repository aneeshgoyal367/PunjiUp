import React from 'react'
import Header from '../Components/Header'
import Bottom from '../Components/sbifund-components/Bottom'

import '../CSS/sbifund.css'
function sbifund() {
    return (
        <div>
            <div id="Header"><Header signup={false} signin={false} home={false} contact={false} about={false} signout={true} search={true}/></div>
            <div id="Bottom"><Bottom/></div>
            
        </div>
    )
}
export default sbifund