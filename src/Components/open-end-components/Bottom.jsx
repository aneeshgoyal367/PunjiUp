import React, { useState, useEffect } from 'react'
// import Showopen from './Showopen'

import { useLocation } from "react-router-dom";
import GridComponent from './Grid-Component';
import OpenGridConfig from './OpenGridConfig';

import axios from 'axios'
const api = axios.create({
    baseURL: 'https://punjiup.herokuapp.com/api'
})
function Bottom(props) {
    // const location = useLocation();
    // console.log(location.state)
    let  url='/home/fund/Open';
    let headerObj = {"content-type": "application/json"};

    
    const [openenddata, openendsetData] = useState([]);
    

    let gridProp = OpenGridConfig();
    
    gridProp.data = openenddata;

    useEffect(() => {
        if (props.role === 'ROLE_FUNDMANAGAER') {
            // url='/home/fund/Close'
            url='/fundmanager/funds/Open'
            
            
        }
        else if(props.role === 'ROLE_INVESTOR') {
            // url='/home/fund/Close'
            url='/investor/fund/Open'
            
            
        }
        if (props.role) { 
            headerObj.Authorization = `Bearer ${localStorage.getItem("token")}`
        }
        
        api.get(url,{ "headers": headerObj}).then(res => {
            openendsetData(res.data)
            gridProp.data = res.data;
            
       
       
        
    
        })
    }, [])


    return (

        // openenddata.map((e) => {
        //     return <Showopen show={e} />

        // })
        (gridProp && gridProp.data.length > 0) &&
        <GridComponent gridObj={gridProp} />
    )
}
export default Bottom


    // <td><Link to="/sbifund">SBI Small Cap Fund</Link></td>