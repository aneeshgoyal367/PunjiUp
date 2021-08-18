import React, { useState, useEffect } from 'react'

import GridComponent from '../../common-components/grid-component';

import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:3000/JSON/closefunddetail.json'
})
function Bottom() {

    const [respData, setData] = useState([])
    let gridProp = {
        
        columnHeaderNames: ['ID', 'Fund Name', 'Fund Assets', '1-Year Return', '3-Year Return', '5-Year Return', 'ManagerId'],
        data: respData
    
    };
    useEffect(() => {
        api.get('').then(res => {
            setData(res.data);
            gridProp.data = res.data;
        })
    }, [])


    
    return (
        (gridProp && gridProp.data) &&
        <GridComponent gridObj={gridProp} />

    )
}
export default Bottom




 
