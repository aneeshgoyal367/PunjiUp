import React from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
function Header() {
    return (
        <nav >
            <img
                alt=""
                src='assets/photos/logo1.png'
                width="150"
                height="100"
                id="logo"
            />
            PunjiUp
            <button className="links">Sign out</button>
            <Router>
                <Link to="/Aboutus" className="links">About Us</Link>
                <Link to="/Contactus" className="links" >Contact Us</Link>
                <Link to="/Home" className="links" >Home</Link>
            </Router>
            <form action="/" className="links">
                <label htmlFor="header-search"></label>
                <input
                    type="text"
                    id="header-search"
                    placeholder="Search funds"
                    name="s"
                />
                <button type="submit">Search</button>
            </form>
        </nav>

    )
}
export default Header