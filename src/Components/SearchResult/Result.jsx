import React, { useState, useEffect } from "react";
import axios from 'axios'
// import { useLocation } from 'react-router-dom'
const api = axios.create({
    baseURL: 'http://localhost:3000/JSON/Search.json'
})
export default function Result(props) {
    const [apidata, setapidata] = useState([]);
    let filteredData = [];
    useEffect(() => {
        api.get('').then(res => {
            setapidata(res.data)
        })
    }, [])
    filteredData = apidata.filter(e => e.name == props.data)

    return (
        <>{filteredData.length ?
            filteredData.map((item, key) =>
                <h3 key={key} >{item.name}</h3>
            ) : null}
        </>
    )
}