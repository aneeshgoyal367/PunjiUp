import React from 'react'
import Header from '../Components/Header'
import Detailsoffund from '../Components/fundDetail-components/detailsoffund'
import { useLocation } from 'react-router-dom'
import { useParams } from 'react-router'

import '../CSS/sbifund.css'
function Funddetail() {
    const {fundId} = useParams();
    const location = useLocation();
    let idToPass ;

    // console.log(location);
    if(location.state!== undefined){
        idToPass = location.state.id;
    }
    else{
        idToPass = fundId;
    }
    
    if(idToPass==undefined){
        return <></>;
    }
    let islogin=false;
    if (localStorage.token) {
        
        islogin=true;
    }
    return (
        <div>
            <div id="Header"><Header signup={false} signin={!islogin} home={true} contact={true} about={true} signout={islogin} search={true}/></div>
            <div id="Detailsoffund"><Detailsoffund id={idToPass}/></div>
            </div>
    )
}
export default Funddetail