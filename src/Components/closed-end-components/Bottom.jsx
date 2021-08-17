import React, { useState, useEffect } from 'react'
// import Show from './Show';

import GridComponent from '../../common-components/grid-component';

import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:3000/JSON/closefunddetail.json'
})
function Bottom() {

    const [respData, setData] = useState([])
    let gridProp = {
        
        columnHeaderNames: ['ID', 'Fund Name', 'Fund Assets', '1-Year Return', '3-Year Return', '5-Year Return'],
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




 
