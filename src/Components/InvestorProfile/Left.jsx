import React from 'react'
import { BrowserRouter as Router, Link, Route, useRouteMatch, Switch } from 'react-router-dom'
import Investment from '../../Components/InvestorProfile/Investment'
import Profile from '../../Components/InvestorProfile/Profile'
// import Transaction from '../../Components/InvestorProfile/Transaction'
// import Sip from '../../Components/InvestorProfile/Sips'
// import Cart from '../../Components/InvestorProfile/Cart'

function Left() {
    let { path, url } = useRouteMatch();
    console.log("=======>>>> "+url);
    return (
        <div>
            <h2>Hi Neelmani</h2>
            {/* <Router>
                <Link to='/investor/investment' className="left-links"> All Investments</Link>
                <br/><br/>
                <Link to='/investor/profile' className="left-links"> Profile </Link>
                <br/><br/>
                <Link to='/investor/transaction' className="left-links"> Transactions</Link>
                <br/><br/>
                <Link to='/investor/sip' className="left-links"> Sips</Link>
                <br/><br/>
                <Link to='/investor/cart' className="left-links">  Cart </Link>
            </Router> */}
            <ul>
                <li>
                    <Link to='/investor/profile' className="left-links"> Profile </Link>
                </li>
            </ul>


            <Switch>
                <Route exact path={path}>
                <h3>Please select a menu...</h3>
                </Route>
                <Route path="investor/profile">
                    <Profile/>
                </Route>
                
            </Switch>
        </div>
    );
}
export default Left;