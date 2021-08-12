import React from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
function Header() {
    return (
        <div >
            <img
                alt=""
                src="assets\photos\logo1.png"
                width="150"
                height="100"
                id="logo"
            />
            PunjiUp
            <Router>
                <Link to="/Aboutus" className="links">About Us</Link>
                <Link to="/Contactus" className="links" >Contact Us</Link>
                <Link to="/Home" className="links" >Home</Link>
                
            </Router>
        </div>

    )
}
export default Header