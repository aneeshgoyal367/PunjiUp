import React from "react";
import Header from '../Components/InvestorProfile/Header'
import Left from '../Components/InvestorProfile/Left1'
//import ILeft from './investorPage/invleft'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";


import '../CSS/InvestorProfile.css'

function InvestorProfile() {
  
  return (
    <div id="info">
      THis is investor profile page.
      <div id="header3"><Header /></div>
      <div id="left3"><Left /></div>
      
    </div>
  );
}


export default InvestorProfile;
