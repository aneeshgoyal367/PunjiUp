import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from '../Components/Header'
import Middle from '../Components/InvestorProfile/Middle'
import axios from 'axios'
import '../CSS/InvestorProfile.css'
import {Route} from 'react-router-dom'
const api = axios.create({
  baseURL: 'http://localhost:3000/JSON/cust-fund.json'
})
function InvestorProfile({ authorized }) {
  // if(!authorized){
  //   return <Redirect to='/InvSignin'/>
  // }
  const [investorData, setinvestorData] = useState([])
  const location = useLocation();
  // if (!localStorage.getItem("userEmailid") && localStorage.getItem("userEmailid")==undefined && localStorage.getItem("userEmailid")==null) {
  //   return <Route to='/InvSignin' />
  // }

  useEffect(() => {
    api.get('').then(res => {
      setinvestorData(res.data)
    })
  }, [])
  let show = [];
  // investorData.map((e) => {
  //   if (e.cust_id === location.state.id) {
  //     show.push(e);
  //   }
  // })


  show = investorData.filter(e => e.cust_id==location.state.id)

  return (
    <div id="info">
      <Header signup={false} signin={false} home={false} contact={false} about={false} signout={true} search={true} />
      <Middle show={show} name={location.state.fname}></Middle>
    </div>
  );
}


export default InvestorProfile;
