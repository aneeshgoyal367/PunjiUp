import React from 'react'
import Header from '../Components/Header'
import Bottom from '../Components/About-us-components/Bottom'

 import '../CSS/Aboutus.css'
function Aboutus() {
    let islogin=false;
    if (localStorage.token) {
        
        islogin=true;
    }
    return (
        <div>
           <div id="Header"> <Header signup={false} signin={!islogin} home={true} contact={true} about={true} signout={islogin} search={true}/></div>
            <div id="Bottom"><Bottom/></div>
            
        </div>
    )
}
export default Aboutus