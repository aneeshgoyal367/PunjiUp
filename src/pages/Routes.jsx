import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import Aboutus from '../pages/Aboutus'
import Contactus from '../pages/Contactus'
function Routes() {
    
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Homepage}></Route>
                <Route exact path="/Home" component={Homepage}></Route>
                <Route exact path="/Aboutus" component={Aboutus}></Route>
                <Route exact path="/Contactus" component={Contactus}></Route>
            </Switch>
        </Router>
    )
}
export default Routes