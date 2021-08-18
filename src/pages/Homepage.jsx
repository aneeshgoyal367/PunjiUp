import React from 'react'
import Header from '../Components/Header'
import MiddleImage from '../Components/Home-page-components/MiddleImage'
import Homebutton from '../Components/Home-page-components/Homebutton'
import '../CSS/Homepage.css'

  
function Homepage() {
    return (
        <div>
            <div id="Header"><Header signup={true} signin={true} home={false} contact={true} about={true} signout={false} search={true}/></div>
            <div id="MiddleImage"><MiddleImage/></div>
            <div id="Homebutton"><Homebutton /></div>
        </div>
        
    )
}
export default Homepage