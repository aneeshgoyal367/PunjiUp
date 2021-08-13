import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";

import Profile from './Profile';
import Investment from './Investment'
import Transaction from './Transaction'
import Sip from './Sips'
import Cart from './Cart'

function Left1() {
    return (
        <Router>
        <div>
            <h2>Hi Neelmani.. Left 1 page...</h2>
            
            <ul>
                <li>
                    <Link to='/investor/investment' className="left-links"> All Investments</Link>
                </li>
                <li>
                    
                    <Link to={`/investor/profile`} className="left-links">Profile</Link>
                </li>
                <li>
                    <Link to='/investor/transaction' className="left-links"> Transactions</Link>
                </li>
                <li>
                    <Link to='/investor/sip' className="left-links"> Sips</Link>
                </li>
                <li>
                    <Link to='/investor/cart' className="left-links">  Cart </Link>
                </li>
                
            </ul>


            <Switch>
                <Route exact path={`/investor/profile`}>
                    <Profile/>
                </Route>
                <Route path='/investor/investment' component={Investment} />
                <Route path='/investor/transaction' component={Transaction} />
                <Route path='/investor/sip' component={Sip} />
                <Route path='/investor/cart' component={Cart} />
                
            </Switch>
        </div>
        </Router>
    );
}
export default Left1;