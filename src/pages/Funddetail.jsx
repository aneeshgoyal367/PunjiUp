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
    return (
        <div>
            <div id="Header"><Header signup={false} signin={false} home={true} contact={false} about={false} signout={false} search={false}/></div>
            <div id="Detailsoffund"><Detailsoffund id={idToPass}/></div>
            
        </div>
    )
}
export default Funddetail