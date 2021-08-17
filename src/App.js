import Homepage from './pages/Homepage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Aboutus from './pages/Aboutus'
import Contactus from './pages/Contactus'
import Closedend from './pages/Closedend'
import Openend from './pages/Openend'
import Signinpage from './pages/Signinpage'
import Signuppage from './pages/Signuppage'
import Fundmanagerb from './pages/Fundmanagerb'
import sbifund from './pages/sbifund'
import managerprofile from './pages/managerprofile'

//import logo from './logo.svg';
// import './App.css';
import React from 'react';

import InvestorProfile from './pages/InvestorProfile';
import InvSignin from './pages/InvSignIn'

function App() {
  return (
    <Router>
      <Switch>
<Route path="/" exact component={Homepage}/>
<Route path="/Aboutus" exact component={Aboutus}/>
<Route path="/Contactus" exact component={Contactus}/>
<Route path="/Signinpage" exact component={Signinpage}/>
<Route path="/Signuppage" exact component={Signuppage}/> 
<Route path="/Closedend" exact component={Closedend}/>
<Route path="/Openend" exact component={Openend}/>
<Route path="/Fundmanagerb" exact component={Fundmanagerb}/>
<Route path="/sbifund" exact component={sbifund}/>
<Route path="/managerprofile" exact component={managerprofile}/>
<Route path="/InvestorProfile" exact component={InvestorProfile}/>
<Route path="/InvSignin" exact component={InvSignin}/>


      </Switch>
    </Router>

  );
    //     <Route exact path="/InvSignin" component={InvSignin}></Route>
    //     {/* <Route exact path="/investor" component={() => <InvestorProfile authorized={false}/>}></Route> */}
    //     <Route exact path="/investor" component={InvestorProfile}></Route>
    //   </Switch>
    // </Router>
  // )
}
export default App;
