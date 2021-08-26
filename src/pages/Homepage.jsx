import React from 'react'
import Header from '../Components/Header'
import MiddleImage from '../Components/Home-page-components/MiddleImage'
import Homebutton from '../Components/Home-page-components/Homebutton'
import '../CSS/Homepage.css'

  
function Homepage() {
    let islogin=false;
    if (localStorage.token) {
        
        islogin=true;
    }
    return (
        <div>
            <div id="Header"><Header signup={false} signin={!islogin} home={true} contact={true} about={true} signout={islogin} search={true}/></div>
            <div id="MiddleImage"><MiddleImage/></div>
            <div id="Homebutton"><Homebutton /></div>
            {/* <div className="bg-dark text-light py-3">
                <p className="text-center">
                    Copyright &copy; PunjiUp.com
                </p>
            </div> */}
        </div>
        
    )
}
export default Homepage