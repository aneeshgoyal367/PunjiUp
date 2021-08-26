import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useLocation } from "react-router-dom";
import axios from 'axios'
function Bottom({ data }) {
    let history = useHistory();
    const location = useLocation();
    const api = axios.create({
        baseURL: 'https://punjiup.herokuapp.com/api/investor'
    })
    function addToCart(e) {
        
        e.preventDefault();
        if (!localStorage.token) {
            alert("Sign in to add to cart");

        }
        else {
            const body = JSON.stringify({
                "transactionType": "Sell",
                "amount": amount,
                "fundId": data.fundId
            })
            api.post('/cart/addItem', body, { "headers": { "content-type": "application/json", "Authorization": `Bearer ${localStorage.getItem("token")}` } }).then((res) => {
                if (res && res.data) {
                    console.log(location.state)
                    alert("Successfully added to the cart")
                    // let userObj= localStorage.getItem("userObj")
                    // console.log(userObj)
                    // history.push({
                    //     pathname: '/investor',
                    //     state: { id: userObj.id, name:userObj.firstName, role:userObj.role }
                        
                    // });
                }
            }).catch(function (error) { alert(error) })
        }
    }
    const [amount, setAmount] = useState('');
    return (
        <>
            <p>Fund Name: {data.fundName}</p>
            <p>Symbol: {data.symbol}</p>
            <p>Total Value: {data.totalValue}</p>
            <p>Fund Type: {data.fundType}</p>
            {data.fundType == "Close" ? <><p>Lock In Period: {data.closeEndFund.lockInPeriod}</p>
                <p>End Date: {data.closeEndFund.bendDate}</p>
                <p>Start Date: {data.closeEndFund.bstartDate}</p> </> : ""}
            <p>NAV: {data.nav}</p>
            <p>Expense Ratio: {data.expenseRatio}</p>
            <p>Fund Manager: {data.fundManager.firstName}</p>
            <p>Exit Load: {data.exitLoad}</p>
            <form onSubmit={addToCart}>
                <label htmlFor="addtocart">Enter Amount </label>
                <input type="text" id="searchbox" value={amount} onChange={(e) => setAmount(e.target.value)}></input>
                <button type="submit">Add to Cart</button>
              
            </form>
        </>
    )
}
export default Bottom