import React, { useState, useEffect } from 'react'
// import Show from './Show';

import GridComponent from '../open-end-components/Grid-Component';

import axios from 'axios'
const api = axios.create({
    // baseURL: 'http://localhost:3000/JSON/closefunddetail.json'
 baseURL: 'https://punjiup.herokuapp.com/api/fundmanager/funds/Close'
})
function Bottom() {

    const [respData, setData] = useState([])
    let gridProp = {
        
        columnHeaderNames: [
            "Fund Name",
            "Symbol",
            "Total  Value",
            "Fund Manager",
            // "Button"
        ],
        data: respData
    
    };
    useEffect(() => {
        api.get('').then(res => {
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




 
