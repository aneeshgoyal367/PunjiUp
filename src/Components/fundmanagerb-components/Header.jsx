import React from 'react'
import {Link } from 'react-router-dom'
function Header() {
    let mystyle={margin:"auto",maxWidth:'300px'}
    return (
        <div >
            <ul id="menu4">
            <img src="assets/photos/logo.png" className="logo4" alt="logo" width="300" height="150" />
            <li><Link to="/">Home</Link></li>
            <li><form className="example2" action="/action_page.php" style={mystyle}>
        <input type="text" placeholder="Search.." name="search2" />
        <button type="submit"><i class="fa fa-search"></i></button>
    </form></li>
                
                
            </ul>
                
            
        </div>

    )
}
export default Header