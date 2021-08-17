import { React, form } from 'react'
function Right() {
    return (
        <div>
            <div id="header"><h2>Welcome to PunijUp</h2></div>
            <div id="form">
                <form>
                    <div className="form-part">
                        <input type="text" name="emailid" id="email-id" placeholder="Eamil id" />
                    </div>
                    <br /><br />
                    <div className="form-part">
                        <input type="password" name="password" id="password" placeholder="Password" />
                    </div>
                    <br /><br />
                    <div className="form-part">
                        <input type="password" name="confirm-password" id="c-password" placeholder="Confirm Password" />
                    </div>
                    <br /><br />
                    <div className="form-part">
                        <input type="text" name="firstName" id="fName" placeholder="First Name" />
                    </div>
                    <div className="form-part">
                        <input type="text" name="lastName" id="lName" placeholder="Last Name" />
                    </div>
                    <div className="form-part">
                        <input type="submit" id="button" />
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Right