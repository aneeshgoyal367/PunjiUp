import React, { useState, useEffect } from 'react'
import Showfund from './Showfund'

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
          return <Showfund show={e} />

      })
  )
}
export default Bottom
        
           /* <div className="box2">
            <dl className="upar">
                <dt><h3>Sankaran Naren</h3></dt>
                <dt><h6>ICICI Prudential Mutual Fun</h6></dt>

            </dl>
            <table>
                <tr>
                  <th>AUM</th>
                  <th>Schemes</th>
                  <th>Highest Returns</th>
                  

                </tr>
                <tr>
                  <td>₹1,11,005 Cr</td>
                  <td>38</td>
                  <td>+36.73%</td>
                 
                  
                </tr>
                </table>
         </div>
         <div className="box2">
            <dl className="upar">
                <dt><h3>Kunal Sangoi</h3></dt>
                <dt><h6>Aditya Birla Sun Life Mutual Fund</h6></dt>

            </dl>
            <table>
                <tr>
                  <th>AUM</th>
                  <th>Schemes</th>
                  <th>Highest Returns</th>
                  

                </tr>
                <tr>
                  <td>₹9,476 Cr</td>
                  <td>6</td>
                  <td>+34.39%</td>
                 
                  
                </tr>
                </table>
         </div>
        
*/