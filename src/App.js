import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import InvestorProfile from './pages/InvestorProfile';
import InvSignin from './pages/InvSignIn'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/InvSignin" component={InvSignin}></Route>
        {/* <Route exact path="/investor" component={() => <InvestorProfile authorized={false}/>}></Route> */}
        <Route exact path="/investor" component={InvestorProfile}></Route>
      </Switch>
    </Router>
  )
}
export default App;
