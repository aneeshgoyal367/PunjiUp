import React, { useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../CSS/Header.css'
import axios from 'axios'
const api = axios.create({
    baseURL: 'https://punjiup.herokuapp.com/api/home'
})
function Header(props) {

    const inputResort = useRef();
    const inputResort1 = useRef();
    let history = useHistory();
    const [searchData, setsearchData] = useState([]);
    const [showList, setshowList] = useState(false);
    const [info, setInfo] = useState("search_fund_manager");
    const [name, setname] = useState();

    function removeuser() {
        localStorage.removeItem('token')
        history.push('/Home')
    }
    const searching1 = (data) => {
        setInfo(data.target.value);
    }
    let actualdata = [];
    const searching = (event) => {
        if (info === "search_fund_manager" && event.target.value.length) {
            setshowList(true);
            setname(event.target.value)
            api.get(`/fundManager?name=${event.target.value}`).then(res => {
                if (res && res.data && res.data.length) {
                    setsearchData(res.data)
                    history.push(

                    )
                } else {
                    setshowList(false);
                    setsearchData([])
                }

            })
        }
        else if (info === "search_fund" && event.target.value.length) {
            setshowList(true);
            setname(event.target.value)
            api.get(`/fundList?name=${event.target.value}`).then(res => {
                if (res && res.data && res.data.length) {
                    setsearchData(res.data)
                } else {
                    setshowList(false);
                    setsearchData([])
                }
            })
        } else {
            setname("")
            setshowList(false);
            setsearchData([])
        }
    }

    function finalResult(event) {

        if (info === "search_fund_manager") {
            actualdata = searchData.filter((e) => e.firstName == name)
            history.push({
                pathname: '/fund-managers/' + actualdata[0].id,
                state: { id: actualdata[0].id }
            });
        }
        if (info === "search_fund") {
            actualdata = searchData.filter((e) => e.fundName == name)
            history.push({
                pathname: '/fund-detail/' + actualdata[0].fundId,
                state: { id: actualdata[0].fundId }
            });
        }
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
            {props.signout || localStorage.getItem("token") ? <button className="links" onClick={removeuser}>Sign out</button> : ""}
            {props.signup && !localStorage.getItem("token") ? <Link to="/Signuppage" className="links" >Sign Up</Link> : ""}
            {props.signin && !localStorage.getItem("token") ? <Link to="/Signinpage" className="links" >Sign in</Link> : ""}
            {props.about ? <Link to="/Aboutus" className="links" >About Us</Link> : ""}
            {props.contact ? <Link to="/Contactus" className="links"  >Contact Us</Link> : ""}
            {props.home ? <Link to="/Home" className="links" >Home</Link> : ""}
            {props.search ? <form action="/" className="links" onSubmit={finalResult}>
                <label htmlFor="header-search"></label>
                <select onChange={(e) => searching1(e)} id="dropdown">
                    <option value="search_fund_manager">Fund Manager</option>
                    <option value="search_fund">Fund</option>
                </select>

                <input ref={inputResort} type="text" list="tahoe-resorts" className="datalist" value={name} onChange={searching} id="searchbox" />
                {showList && searchData.length && info === "search_fund_manager" ?
                    <datalist id="tahoe-resorts" >
                        {searchData.map((item, key) =>
                            <option key={key} value={item.firstName} />
                        )}
                    </datalist>
                    : <datalist id="tahoe-resorts" >
                        {searchData.map((item, key) =>
                            <option key={key} value={item.fundName} />
                        )}
                    </datalist>}
                <button type="submit">Search</button>
            </form> : ""}
        </div>
    )
}
export default Header;