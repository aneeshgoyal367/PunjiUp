import React, { useEffect, useState } from 'react'
import axios from 'axios'
import GridComponent from '../open-end-components/Grid-Component';
import OpenGridConfig from '../open-end-components/OpenGridConfig';
function ManAllFund({id}) {
    const api = axios.create({
        baseURL: `https://punjiup.herokuapp.com/api/home/fundmanager/${id}/showFunds`
    })
    const [fundData, setfundData] = useState([]);
    let gridProp = OpenGridConfig();
    gridProp.data = fundData;
    useEffect(() => {
        api.get('').then(res => {
            setfundData(res.data)
            gridProp.data = res.data;
        })
    }, [])
    // console.log(50)
    // let allFund = fundData.filter(e => e.mngr_id == props.id); 
    // debugger;
    return (
        (gridProp && gridProp.data.length > 0) &&
        <GridComponent gridObj={gridProp} />
    )
}
export default ManAllFund
