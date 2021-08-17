import React, { useRef, useEffect, useState } from 'react'
import { Route, useHistory,Redirect } from 'react-router-dom'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Result from './SearchResult/Result'
import '../CSS/Header.css'
import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:3000/JSON/Search.json'
})
function Header(props) {
    const inputResort = useRef();
    let history = useHistory();
    const [searchData, setsearchData] = useState([]);
    const [showList, setshowList] = useState(false);
    const [name, setname] = useState();
    useEffect(() => {
        api.get('').then(res => {
            setsearchData(res.data)
        })
    }, [])
    function removeuser() {
        localStorage.removeItem('userEmailid')
        history.push('/InvSignin')
    }
    function searching(event) {
        if (event.target.value.length) {
            setshowList(true);
            setname(event.target.value)
        }
        else {
            setshowList(false);
        }
    }
    function finalResult(event) {
        history.push({
            pathname: '/searchresult',
            state: { data:name }
        });
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
            {props.search ? <form action="/" className="links" onSubmit={finalResult}>
                <label htmlFor="header-search"></label>
                <input ref={inputResort} type="text" list="tahoe-resorts" className="datalist" value={name} onChange={searching} />
                {showList ?
                    <datalist id="tahoe-resorts" >
                        {searchData.map((item, key) =>
                            <option key={key} value={item.name} />
                        )}
                    </datalist> : ""}
                <button type="submit">Search</button>
            </form> : ""}
        </div>
    )
}
export default Header;