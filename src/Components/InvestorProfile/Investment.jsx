// import React from 'react'
// import Show from './Show'
// function Investment (props){
//     let i=0;
//     return(
//         // props.show.map((e) => {
//         //     return <Show key={e.cust_id + i++} show={e}/>
//         // })
//         <>This is investment of user</>
//     );
// }
// export default Investment;
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
const api = axios.create({
  baseURL: 'https://punjiup.herokuapp.com/api/investor'
})

function Investment() {
  let headerObj = {"content-type": "application/json"};
 
  headerObj.Authorization = `Bearer ${localStorage.getItem("token")}`

  const [approvedata, setapprovedata] = useState([])
  let temp = [];
  useEffect(() => {
    api.get('/customerfund',  { "headers": headerObj }).then(res => {
      temp = res.data;
      setapprovedata(temp);
    })
  }, [])
 
  


  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
          <th scope="col">S.no</th>
          
          <th scope="col">Fund Name</th>
          <th scope="col">Total Value</th>
            <th scope="col">Shares</th>
        
          </tr>
        </thead>
        <tbody>
          {approvedata.length ? approvedata.map((item, index) => {
            return (
            <tr key={item.id}>
              <th scope="row">{index + 1}</th>
              <td>{item.fundName}</td>
              <td>{item.totalValue}</td>
              <td>{item.shares}</td>
             
          
            </tr>)
          }) : "No Transaction Available"}
          
          {/* onClick={this.handleApprove} */}
        </tbody>
      </table>
    </div>
  )
}
export default Investment