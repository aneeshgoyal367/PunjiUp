import React, { useState, useEffect } from 'react'
// import Show from './Show';
import { useLocation } from "react-router-dom";
import GridComponent from '../open-end-components/Grid-Component';

import axios from 'axios'
const api = axios.create({
    baseURL: 'https://punjiup.herokuapp.com/api'
})
function Bottom(props) {
    console.log(props)
    // const location = useLocation();
    // console.log(location.state)
    // let url=https://punjiup.herokuapp.com/api/fundmanager/funds/Close
    let  url='/home/fund/Close';

    if (props.role !== 'ROLE_INVESTOR') {
        // url='/home/fund/Close'
        url='/fundmanager/funds/Close'
        
    }
  

    const [respData, setData] = useState([])
    let gridProp = {
        
        columnHeaderNames: [
            "Fund Name",
            "Symbol",
            "Total Value",
            "Fund Manager",
            // "Button"
        ],
        data: respData
    
    };
    useEffect(() => {
        api.get(url,{ "headers": { "content-type": "application/json", "Authorization": `Bearer ${localStorage.getItem("token")}` } }).then(res => {
            setData(res.data);
            gridProp.data = res.data;
        })
    }, [])


    
    return (

        // data.map((e) => {
        //     return <Show show={e} />

        // })
        (gridProp && gridProp.data) &&
        <GridComponent gridObj={gridProp} />

    )
}
export default Bottom




 
