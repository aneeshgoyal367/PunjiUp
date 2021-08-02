import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import InvSignIn from '../../pages/InvSignIn'
function Left() {
    return (
        <div>
            <div id="welcome"><h2>Welcome to PunjiUp</h2></div>
            <br /><br />
            <div id="investor">
                <Router>
                    <Link to="../../pages/InvSignIn" id="button">Signin as Investor</Link>
                    <br /><br />
                    <Link to="" id="signin">Don't have an Investor account</Link>
                    <Switch>
                        <Route path="../../pages/InvSignIn"><InvSignIn /></Route>
                    </Switch>
                </Router>
            </div>
            <br /><br />
            <div id="manager">
                <Router>
                    <Link to="" id="button">Signin as Fund Manager</Link>
                    <br /><br />
                    <Link to="manager-sign-up.html" id="signin">Don't have a fund Manager account</Link>
                </Router>
            </div>
        </div>
    )
}
export default Left;