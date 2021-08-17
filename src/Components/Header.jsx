import React from 'react'
import { useHistory } from 'react-router-dom'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import '../CSS/Header.css'
function Header(props) {
    let history = useHistory();
    function removeuser() {
        localStorage.removeItem('userEmailid')
        history.push('/InvSignin')
    }
    return (
        <div id="all-page-header">
            <img
                alt=""
                src='assets/photos/logo.png'
                width="250"
                height="100"
                id="logo"
            />
            {props.signout ? <button className="links" onClick={removeuser}>Sign out</button> : ""}
            {props.signup ? <Link to="/Signuppage" className="links" >Sign Up</Link> : ""}
            {props.signin ? <Link to="/Signinpage" className="links" >Sign in</Link> : ""}
            {props.about ? <Link to="/Aboutus" className="links" >About Us</Link> : ""}
            {props.contact ? <Link to="/Contactus" className="links"  >Contact Us</Link> : ""}
            {props.home ? <Link to="/Home" className="links" >Home</Link> : ""}
            {props.search ? <form action="/" className="links">
                <label htmlFor="header-search"></label>
                <input
                    type="text"
                    id="header-search"
                    placeholder="Search funds"
                    name="s"
                />
                <button type="submit">Search</button>
            </form> : ""}
        </div>
    )
}
export default Header;