import React from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import Investment from './Components/InvestorProfile/Investment'
import Profile from './Components/InvestorProfile/Profile'
import Transaction from './Components/InvestorProfile/Transaction'
import Sip from './Components/InvestorProfile/Sips'
import Cart from './Components/InvestorProfile/Cart'
import InvestorProfile from './pages/InvestorProfile'
function Routes() {
    return (
        <BrowserRouter>
            <div>
                <div>
                    <Switch>
                        <Route  exact path="/investor" component={InvestorProfile}>
                        <Route path="/" component={InvestorProfile}></Route>
                           <Route path="/investment">
                                <Investment />
                            </Route>
                            <Route path='/profile' component={Profile} />
                            <Route path='/transaction' component={Transaction} />
                            <Route path='/sip' component={Sip} />
                            <Route path='/cart' component={Cart} />
                        </Route>

                    </Switch>
                </div>

            </div>
        </BrowserRouter>
    )
}
export default Routes;