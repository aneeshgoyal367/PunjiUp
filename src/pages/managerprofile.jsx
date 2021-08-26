import React from 'react'
import { useLocation } from "react-router-dom";
import Header from '../Components/Header'
// import MidA from '../Components/manager-profile-components/MidA'


import Bottom from '../Components/manager-profile-components/Bottom'


import '../CSS/profile.css'
import { useHistory } from 'react-router-dom'
function Manager() {
    let islogin=false;
    if (localStorage.token) {
        
        islogin=true;
    }
    let history = useHistory();
    
    const location = useLocation();
    console.log(location.state)
    return (
        <div id="info">
            {localStorage.getItem("token") ? <div>
            <div id="Header"><Header signup={false} signin={!islogin} home={true} contact={true} about={true} signout={islogin} search={true}/></div>
            {/* <div id="MidA"><MidA/></div> */}
           
            {/* <div id="Bottom"><Bottom/></div> */}
            <Bottom id={location.state.id} firstName={location.state.name} role={location.state.role}></Bottom>
      </div> : history.push('/ManSignin')}
            

            
        </div>
    )
}
export default Manager