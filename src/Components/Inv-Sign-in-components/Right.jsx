import { useHistory } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:3000/JSON/user.json'
})
function Right() {
    const [userData, setUserData] = useState([])
    useEffect(() => {
        api.get('').then(res => {
            setUserData(res.data)
        })
    }, [])

    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    let history = useHistory();
    const alertmsg = (e) => {
        e.preventDefault();
        let c = 0;
        userData.forEach(element => {
            if (element.email === email && element.password === password) {
                localStorage.setItem("userEmailid", element.email)
                history.push({
                    pathname: '/investor',
                    state: { id: element.cust_id, fname: element.firstName }
                });
            }
            else {
                c++;
            }
        });

        if (c === userData.length) {
            alert("Enter Valid Email and Password")
        }
    }
    return (
        <div>
            <div id="welcome"><h2>Welcome to PunjiUp</h2></div>
            <div id="form">
                <form onSubmit={alertmsg}>
                    <div className="form-part">
                        <input type="text"
                            name="email"
                            id="email-id"
                            value={email}
                            placeholder="Investor's Eamil id"
                            autoComplete="off"
                            onChange={(e) => setemail(e.target.value)}>
                        </input>
                    </div>
                    <br /><br />
                    <div className="form-part">
                        <input type="password"
                            name="password"
                            id="password"
                            value={password}
                            placeholder="Password"
                            autoComplete="off"
                            onChange={(e) => setpassword(e.target.value)}>
                        </input>
                    </div>
                    <br /><br />
                    <div className="form-part">
                        <button type="submit" id="button">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Right