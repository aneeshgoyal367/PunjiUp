import React from 'react'
import Header from '../Components/Header'
import Detailsoffund from '../Components/fundDetail-components/detailsoffund'
import { useLocation } from 'react-router-dom'
import '../CSS/sbifund.css'
function Funddetail() {
    const location=useLocation();
    console.log(location.state.id)
    return (
        <div>
            <div id="Header"><Header signup={false} signin={false} home={false} contact={false} about={false} signout={true} search={true}/></div>
            <div id="Detailsoffund"><Detailsoffund id={location.state.id}/></div>
            
        </div>
    )
}
export default Funddetail