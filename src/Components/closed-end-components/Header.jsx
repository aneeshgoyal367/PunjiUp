import React from 'react'
import {Link } from 'react-router-dom'
function Header() {
    let mystyle={margin:"auto",maxWidth:'300px'}
    return (
        <div >
            <ul id="menu3">
            <img src="assets/photos/logo.png" className="logo3" alt="logo" width="300" height="150" />
            <li><Link to="/">Home</Link></li>
            <li><form className="example" action="/action_page.php" style={mystyle}>
        <input type="text" placeholder="Search.." name="search2" />
        <button type="submit"><i class="fa fa-search"></i></button>
    </form></li>
                
                
            </ul>
                
            
        </div>

    )
}
export default Header