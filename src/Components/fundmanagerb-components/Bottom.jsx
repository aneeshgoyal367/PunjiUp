import React, { useState, useEffect } from 'react'
import GridComponent from './Grid-component';
import OpenGridConfig from './OpenGridConfig';
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8080/api/fundmanager/allfundmanager'
})

function Bottom() {
  const [managerdata, setmanagerdata] = useState([])
  let gridProp = OpenGridConfig();
  gridProp.data = managerdata;
  useEffect(() => {
    api.get('').then(res => {
      // console.log(res.data)
      setmanagerdata(res.data)
      gridProp.data = res.data;
    })
  }, [])
  
  return (
    (gridProp && gridProp.data.length > 0) &&
    <GridComponent gridObj={gridProp}/>

  )
}
export default Bottom

