import React, { useState, useEffect } from 'react'
import Mid from './Mid'

import axios from 'axios'
const api = axios.create({
  baseURL: 'http://localhost:3000/JSON/fundmanagerdetail.json'
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
        
      return <Mid show={e} />
    })

  )
}
export default Bottom
