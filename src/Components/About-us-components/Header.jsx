import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
    return (
        <div >
            <img
                alt=""
                src="assets\photos\logo1.png"
                width="150"
                height="100"
                id="logo"
            />
            PunjiUp
          
                
                <Link to="/Contactus" className="links" >Contact Us</Link>
                <Link to="/" className="links" >Home</Link>
                
           
        </div>

    )
}
export default Header