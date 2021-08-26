import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
const api = axios.create({
  baseURL: 'https://punjiup.herokuapp.com/api/fundmanager'
})

function Approve() {
  const [approvedata, setapprovedata] = useState([])
  let temp = [];
  useEffect(() => {
    api.get('/fund/transactions').then(res => {
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
            <th scope="col">Transaction Id</th>
            <th scope="col">Transaction Status</th>
            
          </tr>
        </thead>
        <tbody>
          {approvedata.length ? approvedata.map((item, index) => {
            return (
            <tr key={item.id}>
              <th scope="row">{index + 1}</th>
              <td>{item.transactionId}</td>
              <td>{item.transactionStatus}</td>
            </tr>)
          }) : ""}

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


