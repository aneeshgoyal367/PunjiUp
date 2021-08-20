import React, { useState, useEffect } from 'react'
import Addjson from './addjson'

import axios from 'axios'
const api = axios.create({
  // baseURL: 'http://localhost:3000/JSON/fundmanagerdetail.json'
  baseURL: 'http://localhost:8080/api/fundmanager/addfund'
})

function Add() {
  const [data, setData] = useState([])
  useEffect(() => {
    api.get('').then(res => {
      setData(res.data)
    })
  }, [])
  return (

    data.map((e) => {
      return <Addjson show={e} />

    })

  )
}
export default Add