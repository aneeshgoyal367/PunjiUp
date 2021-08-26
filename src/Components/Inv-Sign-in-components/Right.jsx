import { useHistory } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
const api = axios.create({
    baseURL: 'https://punjiup.herokuapp.com/api/investor'
})
function Right() {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    let history = useHistory();
    const alertmsg = (e) => {
        e.preventDefault();
        if (email && password) {
            const body = JSON.stringify({
                "email": email,
                "password": password
            })
            api.post('/login', body, { "headers": { "content-type": "application/json", } }).then((res) => {
                if(res && res.data && res.data.token ){
                    let accessToken = res.data.token.split(" ")
                    localStorage.setItem("token", accessToken[1])
                    let userObj = {
                        id: res.data.user.id,
                        name:res.data.user.firstName, 
                        role:res.data.user.role
                    };
                    localStorage.setItem("userObj", JSON.stringify(userObj))
                    history.push({
                        pathname: '/investor',
                        state: { id: res.data.user.id, name:res.data.user.firstName, role:res.data.user.role }
                    });
                }
            }).catch(function (error) { 
                alert("Invalid Username and Password") 
                console.log(error) 
            });
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