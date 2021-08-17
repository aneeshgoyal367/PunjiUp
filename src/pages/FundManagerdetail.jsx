import React from 'react'
import { useLocation } from 'react-router-dom'
export default function ManDetail(){
    const location = useLocation();
    return (
        <div>
            <h3>Name: {location.state.detail.ManagerName}</h3>
            <h3>Company Name: {location.state.detail.FundName}</h3>
            <h3>AUM: {location.state.detail.AUM}</h3>
            <h3>Schemes: {location.state.detail.Schemes}</h3>
            <h3>HighestReturns: {location.state.detail.HighestReturns}</h3>
            <hr></hr>
        </div>
    )
}