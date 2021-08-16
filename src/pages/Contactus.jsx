import React from 'react'
import Header from '../Components/Header'
import Bottom from '../Components/contact-us-components/Bottom'

import '../CSS/Contactus.css'
function Contactus() {
    return (
        <div>
            <div id="Header"><Header signup={false} signin={false} home={true} contact={false} about={false} signout={false} search={false}/></div>
            <div id="Bottom"><Bottom/></div>
            
        </div>
    )
}
export default Contactus