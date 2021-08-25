import React, { useEffect, useState } from 'react'
import axios from 'axios'
import GridComponent from './Grid-Component';
import OpenGridConfig from './ManagerAllFundGrid';
function ManAllFund(props) {
    let c=props.id;
    c.toString();
    const api = axios.create({
        baseURL: `http://localhost:8080/api/fundmanager/${c}/funds`
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
    console.log(50)
    // let allFund = fundData.filter(e => e.mngr_id == props.id); 
    // debugger;
    return (
        (gridProp && gridProp.data.length > 0) &&
        <GridComponent gridObj={gridProp} />
    )
}
export default ManAllFund
