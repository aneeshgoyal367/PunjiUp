import React, { useState, useEffect } from 'react'
// import Show from './Show';

import GridComponent from '../open-end-components/Grid-Component';

import axios from 'axios'
const api = axios.create({
    baseURL: 'https://punjiup.herokuapp.com/api/fundmanager'
})
function Approve() {

    const [respData, setData] = useState([])
    let gridProp = {
        
        columnHeaderNames: [
            "Transaction Id",
            "Transaction Status"
           
        ],
        data: respData
    
    };
    useEffect(() => {
        api.get('/fund/transactions').then(res => {
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
export default Approve


