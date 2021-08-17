import React, { useState, useEffect } from 'react'
// import Showopen from './Showopen'

import GridComponent from '../../common-components/grid-component';
import OpenGridConfig from './OpenGridConfig';

import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:3000/JSON/openfunddetail.json'
})
function Bottom() {

    const [openenddata, openendsetData] = useState([]);

    let gridProp = OpenGridConfig();
    
    gridProp.data = openenddata;

    console.log(gridProp);
    useEffect(() => {
        api.get('').then(res => {
            console.log(res.data)
            openendsetData(res.data)
            gridProp.data = res.data;
        })
    }, [])


// console.log(openenddata)
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