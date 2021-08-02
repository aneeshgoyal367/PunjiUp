import {React,form} from 'react'
function Right() {
    return (
        <div id="right">
            <div id="welcome"><h2>Welcome to PunjiUp</h2></div>
            <div id="form">
                <form>
                    <div className="form-part">
                        <input type="text" name="emailid" id="email-id" placeholder="Manager's Eamil id"></input>
                    </div>
                    <br /><br />
                    <div className="form-part">
                        <input type="password" name="password" id="password" placeholder="Password"></input>
                    </div>
                    <br /><br />
                    <div class="form-part">
                        <input type="submit" id="button"></input>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Right