import React from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import '../CSS/Header.css'
function Header(props) {
    return (
        <div id="all-page-header">
            <img
                alt=""
                src='assets/photos/logo.png'
                width="250"
                height="100"
                id="logo"
            />
            {props.signout?<button className="links">Sign out</button>:""}
            {props.signup?<button className="links">Sign up</button>:""}
            {props.signin?<button className="links">Sign in</button>:""}
            <Router>
                {props.about?<Link to="/Aboutus" className="links">About Us</Link>:""}
                {props.contact?<Link to="/Contactus" className="links" >Contact Us</Link>:""}
                {props.home?<Link to="/Home" className="links" >Home</Link>:""}
                {/* <Switch>
                    <Route exact path="/Home" component={Homepage}></Route>
                    <Route exact path="/Aboutus" component={Aboutus}></Route>
                    <Route exact path="/Contactus" component={Contactus}></Route>
                </Switch> */}
            </Router>
            {props.search?<form action="/" className="links">
                <label htmlFor="header-search"></label>
                <input
                    type="text"
                    id="header-search"
                    placeholder="Search funds"
                    name="s"
                />
                <button type="submit">Search</button>
            </form>:""}
        </div>
    )
}
export default Header;