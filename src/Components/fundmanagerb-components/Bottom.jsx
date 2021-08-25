import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
const api = axios.create({
  baseURL: 'https://punjiup.herokuapp.com/api'
})

function Bottom() {
  const [managerdata, setmanagerdata] = useState([])
  let temp = [];
  useEffect(() => {
    api.get('/investor/allfundmanager').then(res => {
      temp = res.data;
      // gridProp.data = res.data;
      setmanagerdata(temp);
    })
  }, [])

  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">S.no</th>
            <th scope="col">Email</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Company Name</th>
            <th scope="col">Education Qualification</th>
            <th scope="col">Experience</th>
          </tr>
        </thead>
        <tbody>
          {managerdata.length ? managerdata.map((item, index) => {
            return (<tr key={item.id}>
              <th scope="row">{index + 1}</th>
              <td><Link to={`/fund-managers/${item.id}`}>{item.email}</Link></td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.companyName}</td>
              <td>{item.educationQualification}</td>
              <td>{item.experience}</td>
            </tr>)
          }) : ""}

        </tbody>
      </table>
    </div>
  )
}
export default Bottom

