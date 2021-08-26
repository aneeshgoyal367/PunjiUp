import React, { useState, useEffect } from 'react'
import Bottom from './Bottom'

import axios from 'axios'

function Funddetail({id}) {
  const api = axios.create({
    baseURL: `https://punjiup.herokuapp.com/api/home/${id}/fund`
})
  const [data, setData] = useState()
  useEffect(() => {
    api.get('').then(res => {
      setData(res.data)
    })
  }, [])
  
  return (
    <div>
    {data ? 
   <Bottom data={data}/>
       :""}
   </div>
    // data.map((e) => {
    //   return <Bottom show={e} />

    // })
)
}
export default Funddetail

