import React from 'react'
import {Link } from 'react-router-dom'
function Header() {
    let mystyle={margin:"auto",maxWidth:'300px'}
    return (
        <div >
            <ul id="menu7">
            <img src="assets/photos/logo.png" className="logo7" alt="logo" width="300" height="150" />
            <li><Link to="/">Home</Link></li>
            <li><form className="example7" action="/action_page.php" style={mystyle}>
        <input type="text" placeholder="Search.." name="search2" />
        <button type="submit"><i class="fa fa-search"></i></button>
    </form></li>
                
                
            </ul>
            <img src="assets/photos/strip.png" alt="image1" className="fullwidth"></img>
            <h3 className="man">Sankaran Naren, Fund Manager <br/>(AUM- ₹1,11,005 Cr, Schemes- 38, Experience- 26 years )</h3>
<br/>
                
            
        </div>

    )
}
export default Header