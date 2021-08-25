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
    return (
        <>
            <Header signup={false} signin={false} home={true} contact={false} about={false} signout={false} search={false}></Header>
            <ManAllFund id={idToPass} />
        </>
    )
}
export default ManDetail;