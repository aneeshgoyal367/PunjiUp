import React, { useState, useEffect } from 'react'
import Bottom from './Bottom'

import axios from 'axios'
const api = axios.create({
  baseURL: 'http://localhost:3000/JSON/funddetail.json'
})

function Detail(props) {
  const [data, setData] = useState([])
  useEffect(() => {
    api.get('').then(res => {
      setData(res.data)
    })
  }, [])
  let abc=data.filter(e=>e.id==props.id)
  // console.log(abc);
  return (
    <div>{
      abc.length?

    
   <Bottom id={abc}/>
   :""}
   </div>
    // data.map((e) => {
    //   return <Bottom show={e} />

    // })
)
}
export default Detail

