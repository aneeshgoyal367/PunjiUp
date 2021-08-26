import React from 'react';
import Header from '../Components/Header'
import { useParams } from "react-router";
import ManAllFund from '../Components/FundManagerDetail/ManAllFund'
import { useLocation } from 'react-router-dom'
function ManDetail() {
    const { id } = useParams();
    const location = useLocation();
    let idToPass ;
    // console.log(location);
    if(location.state!== undefined){
        idToPass = location.state.id;
    }
    else{
        idToPass = id;
    }
    // console.log("id======" + idToPass);
    let islogin=false;
    if (localStorage.token) {
        
        islogin=true;
    }
    return (
        <>
           <div id="Header"><Header signup={false} signin={!islogin} home={true} contact={true} about={true} signout={islogin} search={true}/></div>
            <ManAllFund id={idToPass} />
        </>
    )
}
export default ManDetail;