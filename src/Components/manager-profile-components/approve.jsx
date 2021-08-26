import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
const api = axios.create({
  baseURL: 'https://punjiup.herokuapp.com/api/fundmanager'
})

function Approve() {
  let headerObj = {"content-type": "application/json"};
 
  headerObj.Authorization = `Bearer ${localStorage.getItem("token")}`

  const [approvedata, setapprovedata] = useState([])
  let temp = [];
  useEffect(() => {
    api.get('/fund/transactions',  { "headers": headerObj }).then(res => {
      temp = res.data;
      setapprovedata(temp);
    })
  }, [])
  function handleApprove(e){
    e.preventDefault();

    let tid = e.currentTarget.getAttribute("data-tid");
    let atype = e.currentTarget.getAttribute("data-atype");
    let reqObj={
      "transactionId":tid,
       "transactionStatus":atype
  }
    api.put('/fund/updatetransaction',reqObj, {"headers" :headerObj }).then(res => {
      alert("User transaction has been " + atype);
    })
  }
  
  // https://punjiup.herokuapp.com/api/fundmanager/fund/updatetransaction

  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
          <th scope="col">S.no</th>
          <th scope="col">Customer Name</th>
          <th scope="col">Customer Email Id</th>
          <th scope="col">Fund Name</th>
          <th scope="col">Total Value</th>
            <th scope="col">Transaction Status</th>
            <th scope="col">Action</th>
            
          </tr>
        </thead>
        <tbody>
          {approvedata.length ? approvedata.map((item, index) => {
            return (
            <tr key={item.id}>
              <th scope="row">{index + 1}</th>
              <td>{item.customer.firstName} {item.customer.lastName}</td>
              <td>{item.customer.email}</td>
              <td>{item.fundDetails.fundName}</td>
              <td>{item.fundDetails.totalValue}</td>
              <td>{item.transactionStatus}</td>
              <td><a href="#" data-tid = {item.transactionId} data-atype="Approved" onClick={handleApprove}>Approve</a> /  
                <a href="#" data-tid = {item.transactionId} data-atype="Rejected" onClick={handleApprove}>Reject</a></td>
            </tr>)
          }) : "No Transaction Available"}
          
          {/* onClick={this.handleApprove} */}
        </tbody>
      </table>
    </div>
  )
}
export default Approve
// import React, { useState, useEffect } from 'react'
// // import Show from './Show';

// import GridComponent from '../open-end-components/Grid-Component';

// import axios from 'axios'
// const api = axios.create({
//     baseURL: 'https://punjiup.herokuapp.com/api/fundmanager'
// })
// function Approve() {

//     const [respData, setData] = useState([])
//     let gridProp = {
        
//         columnHeaderNames: [
//             "Transaction Id",
//             "Transaction Status"
           
//         ],
//         data: respData
    
//     };
//     useEffect(() => {
//         api.get('/fund/transactions').then(res => {
//             setData(res.data);
//             gridProp.data = res.data;
//         })
//     }, [])


    
//     return (

//         // data.map((e) => {
//         //     return <Show show={e} />

//         // })
//         (gridProp && gridProp.data) &&
//         <GridComponent gridObj={gridProp} />

//     )
// }
// export default Approve


