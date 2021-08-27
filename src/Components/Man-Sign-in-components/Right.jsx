import { useHistory } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
const api = axios.create({
    baseURL: 'https://punjiup.herokuapp.com/api/fundmanager'
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
                    localStorage.setItem("userObj", userObj)
                    history.push({
                        pathname: '/managerprofile',
                        state: { id: res.data.user.id, name:res.data.user.firstName, role: res.data.user.role }
                    });
                }
                else if(res){
                    console.log(res)
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
                            placeholder="Manager's Email id"
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



// import { useHistory } from 'react-router-dom'
// import React, { useState, useEffect } from 'react'
// import axios from 'axios'

// function Right() {
//     const api = axios.create({
//         // baseURL: 'http://localhost:3000/JSON/Manager.json'
//         // baseURL: 'http://localhost:8080/api/fundmanager/login'
//         baseURL: 'https://punjiup.herokuapp.com/api/fundmanager/login'
//     })
//     const [email, setemail] = useState("")
//     const [password, setpassword] = useState("")
//     const alertmsg = (e) => {
//         // e.preventDefault();
//         let c = 0;
//         userData.forEach(element => {
//             if (element.email === email && element.password === password) {
//                 localStorage.setItem("email", element.email)
//                 //
//                 history.push({
//                     // pathname: '/manager',
//                     pathname: '/managerprofile',
//                     state: { id: element.cust_id, fname: element.firstName }//changes yahan kiye hai
//                 });
//                 //
//                 // alert("login successfull")
//             }
//             else {
//                 c++;
//             }
//         });

//         if (c === userData.length) {
//             alert("Enter Valid Email and Password")
//         }
//     }
    
//     const [userData, setUserData] = useState([])
//     useEffect(() => {
//         axios.post('https://punjiup.herokuapp.com/api/fundmanager/login',{email,password}).then(res => {
//             setUserData(res.data)
            
//         })
//     }, [])
   
//     let history = useHistory();
    
//     return (
//         <div>
//             <div id="welcome"><h2>Welcome to PunjiUp</h2></div>
//             <div id="form">
//                 <form onSubmit={alertmsg}>
//                     <div className="form-part">
//                         <input type="text"
//                             name="email"
//                             id="email-id"
//                             value={email}
//                             placeholder="Manager's Eamil id"
//                             autoComplete="off"
//                             onChange={(e) => setemail(e.target.value)}>
//                         </input>
//                     </div>
//                     <br /><br />
//                     <div className="form-part">
//                         <input type="password"
//                             name="password"
//                             id="password"
//                             value={password}
//                             placeholder="Password"
//                             autoComplete="off"
//                             onChange={(e) => setpassword(e.target.value)}>
//                         </input>
//                     </div>
//                     <br /><br />
//                     <div className="form-part">
//                         <button type="submit" onClick={alertmsg} id="button">Login</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }
// export default Right
