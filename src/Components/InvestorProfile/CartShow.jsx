import React from 'react'
export default function CartShow ({data}) {
    return (
        <div>
            {/* <h4>Fund Name: {data.fundDetails.fundName} </h4>
            <p>Total Value: {data.fundDetails.totalValue}</p>
            <p>Total Shares: {data.totalShares}</p>
            <p>Amount: {data.amount}</p>
            <p>Status: {data.transactionStatus}</p>
            <p>Fund Type: {data.fundDetails.fundType}</p>
            <p>Manager: {data.fundManager.firstName}</p> */}
            {data[0]}
            <hr/>
        </div>
    )
}