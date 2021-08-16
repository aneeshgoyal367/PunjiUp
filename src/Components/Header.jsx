import React from 'react'
import { useHistory } from 'react-router-dom'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import Aboutus from '../pages/Aboutus'
import Contactus from '../pages/Contactus'
import '../CSS/Header.css'
function Header(props) {
    let history = useHistory();
    function removeuser(){
        localStorage.removeItem('userEmailid')
        history.push('/InvSignin')
    }
    function signUpFun (){
        history.push('/SignUpPage')
    }
    function signInFun (){
        history.push('/SignInPage')
    }
    function about (){
        history.push('/Aboutus')
    }
    function contact (){
        history.push('/Contactus')
    }
    function home (){
        history.push('/Home')
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
            {props.signout?<button className="links" onClick={removeuser}>Sign out</button>:""}
            {props.signup?<button className="links" onClick={signUpFun} >Sign up</button>:""}
            {props.signin?<button className="links" onClick={signInFun}>Sign in</button>:""}
            <Router>
                {props.about?<button className="links" onClick={about}>About Us</button>:""}
                {props.contact?<button className="links" onClick={contact} >Contact Us</button>:""}
                {props.home?<button className="links" onClick={home}>Home</button>:""}
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