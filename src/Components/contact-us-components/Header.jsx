import React from 'react'
import {Link } from 'react-router-dom'
function Header() {
    return (
        <div >
            {/* <img
                alt=""
                src="assets\photos\logo1.png"
                width="150"
                height="100"
                id="logo"
            />
            PunjiUp
          
                <Link to="/Aboutus" className="links">About Us</Link>
                
                <Link to="/" className="links" >Home</Link> */}
                <ul id="menu1">
            <img src="assets/photos/logo.png" class="logo1" alt="logo" width="300" height="150" />


                <li><Link to="/Aboutus">About Us</Link></li>
                <li><Link to="/">Home</Link></li>
            </ul>
                
            
        </div>

    )
}
export default Header