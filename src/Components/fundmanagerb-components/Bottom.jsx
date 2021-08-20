import React, { useState, useEffect } from 'react'
import Showfund from './Showfund'

import axios from 'axios'
const api = axios.create({
  // baseURL: 'http://localhost:3000/JSON/fundmanagerdetail.json'
  baseURL: 'http://localhost:8080/api/fundmanager/allfundmanager'
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
      return <Showfund show={e} />

    })

  )
}
export default Bottom

