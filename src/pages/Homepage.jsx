import React from 'react'
import Homehead from '../Components/Home-page-components/Homehead'
import MiddleImage from '../Components/Home-page-components/MiddleImage'
import Homebutton from '../Components/Home-page-components/Homebutton'
// import '../CSS/Homepage.css'

  
function Homepage() {
    return (
        <div>
            <div id="Homehead"><Homehead /></div>
            <div id="MiddleImage"><MiddleImage/></div>
            <div id="Homebutton"><Homebutton /></div>
        </div>
        
    )
}
export default Homepage