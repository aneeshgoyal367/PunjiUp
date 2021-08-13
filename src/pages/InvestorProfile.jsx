import React from "react";
import Header from '../Components/Header'
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
      <div id="header3"><Header signup={false} signin={false} home={false} contact={false} about={false} signout={true} search={true}/></div>
      <div id="left3"><Left /></div>
      
    </div>
  );
}


export default InvestorProfile;
