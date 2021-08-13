import {useHistory} from 'react-router-dom'
import React, { useState } from 'react'
import UserData from '../../JSON/Manager.json'
function Right() {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    let history = useHistory();
    const alertmsg = (e) => {
        e.preventDefault();
        let c = 0;
        for (let i = 0; i < UserData.length; i++) {
            if (UserData[i].email === email && UserData[i].password === password) {
                // history.push({
                //     pathname:'/investor',
                // });
                alert("login successful")
            }
            else {
                c++;
            }
        }
        if (c === UserData.length) {
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
                            placeholder="Manager's Eamil id"
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