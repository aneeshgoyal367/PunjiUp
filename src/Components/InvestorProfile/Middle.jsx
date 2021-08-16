import React from 'react'
import {
    BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom";
import Investment from './Investment'
import Cart from './Cart'
function Middle(props) {
    return (
        <div>
            <h2>Hi {props.name}</h2>
            <Router>
                <ul>
                    <li>
                        <Link to='/investor/investment' className="left-links"> All Investments</Link>
                    </li>
                    <li>
                        <Link to='/investor/cart' className="left-links">  Cart </Link>
                    </li>
                </ul>
                <hr></hr>
                <div id="main3">
                    <Switch>
                        <Route exact path='/investor' render={() => <Investment show={props.show} />} />
                        <Route path='/investor/investment' render={() => <Investment show={props.show} />} />
                        <Route path='/investor/cart' component={Cart} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
}
export default Middle;