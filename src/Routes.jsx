import React from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import Investment from './Components/InvestorProfile/Investment'
import Profile from './Components/InvestorProfile/Profile'
import Transaction from './Components/InvestorProfile/Transaction'
import Sip from './Components/InvestorProfile/Sips'
import Cart from './Components/InvestorProfile/Cart'
import InvestorProfile from './pages/InvestorProfile'

import TestApp from './pages/testpage';

function Routes() {
    return (

        
        <BrowserRouter>
            <div>
                <Link to='/testapp'>Test App</Link>
            </div>
            <div>
                <Link to='/investor'>Investor Page</Link>
            </div>
            <div>
                <div>
                <Route exact path="/">
                            <InvestorProfile/>
                        </Route>
                        <Route path="/investor">
                            <InvestorProfile/>
                        </Route>
                
                        <Route path="/testapp">
                            <TestApp/>
                        </Route>
                </div>

            </div>
        </BrowserRouter>
    )
}
export default Routes;