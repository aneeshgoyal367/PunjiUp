import React from 'react'
import Header from '../Components/Header'
import Bottom from '../Components/manager-profile-components/Bottom'


import '../CSS/profile.css'
function manager() {
    return (
        <div>
            <div id="Header"><Header signup={false} signin={false} home={false} contact={false} about={false} signout={true} search={true}/></div>
            <div id="Bottom"><Bottom/></div>
            

            
        </div>
    )
}
export default manager