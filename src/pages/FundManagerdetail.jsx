import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom'
import Header from '../Components/Header'
import axios from 'axios'
import ManagerInfo from '../Components/FundManagerDetail/ManagerInfo'
import ManAllFund from '../Components/FundManagerDetail/ManAllFund'
const api = axios.create({
    baseURL: 'http://localhost:3000/JSON/fundmanagerdetail.json'
})
function ManDetail() {
    const [managerData, setmanagerData] = useState([]);
    const location = useLocation();
    useEffect(() => {
        api.get('').then(res => {
            setmanagerData(res.data)
        })
    }, [])
    let myData = [];
    myData = managerData.filter(e => e.id == location.state.id);
    return (
        <>
            {
                myData.length ? <>
                    <Header signup={false} signin={false} home={true} contact={false} about={false} signout={false} search={false}></Header>
                    <ManagerInfo myData={myData} />
                    <ManAllFund id={location.state.id} /></> : ""
            }
        </>
    )
}
export default ManDetail;