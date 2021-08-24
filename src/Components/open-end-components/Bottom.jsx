import React, { useState, useEffect } from 'react'
// import Showopen from './Showopen'

import GridComponent from './Grid-Component';
import OpenGridConfig from './OpenGridConfig';

import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:8080/api/home/fund/Open'
})
function Bottom() {

    const [openenddata, openendsetData] = useState([]);

    let gridProp = OpenGridConfig();
    
    gridProp.data = openenddata;

    useEffect(() => {
        api.get('').then(res => {
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