import React from 'react'
import {Link} from 'react-router-dom'
function Left() {
    return (
        <div>
            <div id="welcome"><h2>Welcome to PunjiUp</h2></div>
            <br /><br />
            <div id="investor">
                <Link to="/Invsignup" id="button">Signup as Investor</Link>
                <br /><br />
                <Link to="/Invsignin" id="signin">Have an Investor account</Link>
            </div>
            <br /><br />
            <div id="manager">
                <Link to="/Mansignup" id="button">SignUp as Fund Manager</Link>
                <br /><br />
                <Link to="/Mansignin" id="signin">Have a fund Manager account</Link>
            </div>
        </div>
    )
}
export default Left;