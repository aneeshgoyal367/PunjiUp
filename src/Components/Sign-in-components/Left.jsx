import React from 'react'
import {Link} from 'react-router-dom'
function Left() {
    return (
        <div>
            <div id="welcome"><h2>Welcome to PunjiUp</h2></div>
            <br /><br />
            <div id="investor">
                <Link to="/Invsignin" id="button">Signin as Investor</Link>
                <br /><br />
                <Link to="/Invsignup" id="signin">Don't have an Investor account</Link>
            </div>
            <br /><br />
            <div id="manager">
                <Link to="/Mansignin" id="button">Signin as Fund Manager</Link>
                <br /><br />
                <Link to="/Mansignup" id="signin">Don't have a fund Manager account</Link>
            </div>
        </div>
    )
}
export default Left;