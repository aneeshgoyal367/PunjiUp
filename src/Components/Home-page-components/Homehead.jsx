import {React} from 'react'
import {Link} from 'react-router-dom'
function Homehead() {
    return (
        <div>
            {/* <table>
        <tr>
            <th> */}
            <ul id="menu">
            <img src="assets/photos/logo.png" class="logo" alt="logo" width="300" height="150" />
            
            
           
          

             {/* {/* {/* <!-- <li><img src="cart.png" class="cart" width="50" height="50"></li> */}
                {/* <li>Buy</li> --> */}

                <li><Link to="/Signuppage">SignUp</Link></li>
                <li><Link to="/Signinpage">SignIn</Link></li>


                <li><Link to="/Aboutus">About Us</Link></li>
                <li><Link to="/Contactus">Contact Us</Link></li>
            </ul>
       
        </div>
    )
}
export default Homehead 