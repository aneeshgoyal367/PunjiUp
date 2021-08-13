import React, { useState, useEffect } from 'react'
import Show from './Show'

import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:3000/JSON/closefunddetail.json'
})
function Bottom() {

    const [data, setData] = useState([])
    useEffect(() => {
        api.get('').then(res => {
            setData(res.data)
        })
    }, [])



    return (

        data.map((e) => {
            return <Show show={e} />

        })
    )
}
export default Bottom




 
