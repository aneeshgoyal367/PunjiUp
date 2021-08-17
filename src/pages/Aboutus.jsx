import React from 'react'
import Header from '../Components/Header'
import Bottom from '../Components/About-us-components/Bottom'

 import '../CSS/Aboutus.css'
function Aboutus() {
    return (
        <div>
           <div id="Header"> <Header signup={false} signin={false} home={true} contact={false} about={false} signout={false}/></div>
            <div id="Bottom"><Bottom/></div>
            
        </div>
    )
}
export default Aboutus