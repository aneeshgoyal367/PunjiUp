import Header from '../Components/InvestorProfile/Header'
import Left from '../Components/InvestorProfile/Left'
import Investment from '../Components/InvestorProfile/Investment'
import Profile from '../Components/InvestorProfile/Profile'
import Transaction from '../Components/InvestorProfile/Transaction'
import Sip from '../Components/InvestorProfile/Sips'
import Cart from '../Components/InvestorProfile/Cart'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import '../CSS/InvestorProfile.css'

function InvestorProfile() {
  return (
    <div id="info">
      THis is investor profile page.
      <div id="header3"><Header /></div>
      <div id="left3"><Left /></div>
      {/* <Router>
        <Switch>
          <div id="main3">
            <Route path='/investment' component={Investment} />
            <Route path='/profile' component={Profile} />
            <Route path='/transaction' component={Transaction} />
            <Route path='/sip' component={Sip} />
            <Route path='/cart' component={Cart} />
          </div>
        </Switch>
      </Router> */}
    </div>
  );
}


export default InvestorProfile;
