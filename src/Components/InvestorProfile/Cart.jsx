import React, { useState, useEffect } from 'react'
import CartShow from './CartShow';
import axios from 'axios'
function Cart({id}) {
    const api = axios.create({
        baseURL: `http://localhost:8080/api/investor/${id}/cart`
    })
    const [cartdata, setcartData] = useState([]);
    useEffect(() => {
        api.get('').then(res => {
            setcartData(res.data)
        })
    }, [])
    let i=0;
    // console.log(gridProp);
    return (
        // cartdata.length?
        // cartdata.map((e) => {
        //     return <CartShow key={i++} data={e}/>
        // }):""
        // <CartShow data={cartdata}/>
        <h1>{cartdata[0]}</h1>
    );
}
export default Cart;