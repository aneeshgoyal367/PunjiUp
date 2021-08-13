import React, { useState, useEffect } from 'react'
import Showopen from './Showopen'

import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:3000/JSON/openfunddetail.json'
})
function Bottom() {

    const [openenddata, openendsetData] = useState([])
    useEffect(() => {
        api.get('').then(res => {
            console.log(res.data)
            openendsetData(res.data)
        })
    }, [])


// console.log(openenddata)
    return (

        openenddata.map((e) => {
            return <Showopen show={e} />

        })
    )
}
export default Bottom


    // <td><Link to="/sbifund">SBI Small Cap Fund</Link></td>