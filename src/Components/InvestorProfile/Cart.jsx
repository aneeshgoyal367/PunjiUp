import React, { useState, useEffect } from 'react'
import CartShow from './CartShow';
import axios from 'axios'
function Cart({ id }) {
    let headerObj = {"content-type": "application/json"};
 
    headerObj.Authorization = `Bearer ${localStorage.getItem("token")}`

    const api = axios.create({
        baseURL: `https://punjiup.herokuapp.com/api/investor`
    })
    const body = JSON.stringify({
        // "customerId":id
        "customerId": id
    })
    function handleBuy(e){
        api.post('/buycart',{}, {"headers" :headerObj }).then(res => {
            alert("Your request sent successfully to corresponding fund manager")
           })

    }


    const [cartdata, setcartData] = useState([]);
    useEffect(() => {
        api.get('/cart', { "headers": { "content-type": "application/json", "Authorization": `Bearer ${localStorage.getItem("token")}` } }).then(res => {
            let temp = [];
            temp = res.data;
            setcartData(temp)
        })
    }, [])

    let i = 0;
    // console.log(gridProp);
    return (
        <div>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">S.no</th>
                        <th scope="col">Fund Name</th>
                        <th scope="col">Total Shares</th>
                        <th scope="col">amount</th>
                    </tr>
                </thead>
                <tbody>
                    {cartdata.length ? cartdata.map((item, index) => {
                        return (<tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{item.fundDetails["fundName"]}</td>
                            <td>{item.totalShares}</td>
                            <td>{item.amount}</td>
                        </tr>)
                    }) : ""}


                </tbody>
                <button onClick={handleBuy}>Buy</button>
            </table>
        </div>
    );
}
export default Cart;