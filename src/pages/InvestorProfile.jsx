import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from '../Components/Header'
import Middle from '../Components/InvestorProfile/Middle'
// import axios from 'axios'
import '../CSS/InvestorProfile.css'
import { useHistory } from 'react-router-dom'
// const api = axios.create({
//   baseURL: 'http://localhost:3000/JSON/cust-fund.json'
// })
function InvestorProfile() {
  let history = useHistory();
  // const [investorData, setinvestorData] = useState([])
  const location = useLocation();

  // useEffect(() => {
  //   if (localStorage.getItem("userEmailid") && localStorage.getItem("userEmailid") != undefined && localStorage.getItem("userEmailid") != null) {
  //     api.get('').then(res => {
  //       setinvestorData(res.data)
  //     })
  //   }
  //   else {
  //     history.push('/InvSignin')
  //   }
  // }, [])
  // let show = [];

  // show = investorData.filter(e => e.cust_id == location.state.id)

  return (
    <div id="info">
      {localStorage.getItem("userEmailid") ? <div><Header signup={false} signin={false} home={false} contact={false} about={false} signout={true} search={true} />
        <Middle id={location.state.id} ></Middle></div> : history.push('/InvSignin')}

    </div>
  );
}


export default InvestorProfile;
