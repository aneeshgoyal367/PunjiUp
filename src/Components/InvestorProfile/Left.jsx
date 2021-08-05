import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
function Left() {
    return (
        <div>
            <h2>Hi Neelmani</h2>
            <Router>
                <Link to='/investor/investment' className="left-links"> All Investments</Link>
                <br/><br/>
                <Link to='/investor/profile' className="left-links"> Profile </Link>
                <br/><br/>
                <Link to='/investor/transaction' className="left-links"> Transactions</Link>
                <br/><br/>
                <Link to='/investor/sip' className="left-links"> Sips</Link>
                <br/><br/>
                <Link to='/investor/cart' className="left-links">  Cart </Link>
            </Router>
        </div>
    );
}
export default Left;