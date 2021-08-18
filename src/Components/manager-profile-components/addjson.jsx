import React, { useState, useEffect } from 'react'
import Addfund from './addfund'

import axios from 'axios'
const api = axios.create({
  baseURL: 'http://localhost:3000/JSON/add.json'
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
      return <Addfund show={e} />

    })

  )
}
export default Add
