import React from 'react'
import {
    BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom";
import Investment from './Investment'
import Cart from './Cart'
import CBottom from '../closed-end-components/Bottom'
import OBottom from '../open-end-components/Bottom'
import FBottom from '../fundmanagerb-components/Bottom'
function Middle(props) {
    return (
        <div>
            <h3>Hi {props.name}</h3>
            <Router>
                <ul>
                    <li>
                        <Link to='/investor/investment' className="left-links"> My Investments</Link>
                    </li>
                    <li>
                        <Link to='/investor/cart' className="left-links">  My Cart </Link>
                    </li>
                    <li>
                        <Link to='/investor/openEnd' className="left-links">  Invest in Open End Funds </Link>
                    </li>
                    <li>
                        <Link to='/investor/closeEnd' className="left-links">  Invest in Close End Funds </Link>
                    </li>
                    <li>
                        <Link to='/investor/fundManager' className="left-links">  See Fund Managers </Link>
                    </li>
                </ul>
                <hr></hr>
                <div id="main3">
                    <Switch>
                        <Route exact path='/investor' render={() => <Investment id={props.id} />} />
                        <Route path='/investor/investment' render={() => <Investment id={props.id} /> } />
                        <Route path='/investor/cart' render={() => <Cart id={props.id} /> } />
                        <Route path='/investor/closeEnd' render={() => (<CBottom role={props.role}/>)}/>
                        <Route path='/investor/openEnd' render={() => (<OBottom role={props.role} />)}/>
                        {/* <Route path='/investor/openEnd' component={CBottom} />
                        <Route path='/investor/closeEnd' component={OBottom} /> */}
                        <Route path='/investor/fundManager' component={FBottom} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
}
export default Middle;