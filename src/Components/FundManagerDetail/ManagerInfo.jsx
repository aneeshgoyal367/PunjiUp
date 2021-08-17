import React from 'react'
export default function ManagerInfo (props){
    console.log(props.myData)
    return (
        <div>
            <h3>Name: {props.myData[0].ManagerName}</h3>
            <h3>Company Name: {props.myData[0].FundName}</h3>
            <h3>AUM: {props.myData[0].AUM}</h3>
            <h3>Schemes: {props.myData[0].Schemes}</h3>
            <h3>HighestReturns: {props.myData[0].HighestReturns}</h3>
            <hr></hr>
        </div>
    )
}