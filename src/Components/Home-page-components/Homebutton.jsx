import React from 'react'
import {Link} from 'react-router-dom'
function HomeButton(){
    let mystyle={margin:"auto",maxWidth:'300px'}
    return (
        <div>
             <h1 className="hi1">Discover Mutual Funds</h1>
    {/* <p className="hi2">Search Mutual Funds, Fund Managers etc.</p> */}

    {/* <form className="example" action="/action_page.php" style={mystyle}>
        <input type="text" placeholder="Search.." name="search2" />
        <button type="submit"><i class="fa fa-search"></i></button>
    </form> */}
    <div className="btn-group">
        <div className="center1">

            <button style={{margin:'10px'}}><Link to="/Closedend">CLOSED END FUNDS</Link></button>
            <button style={{margin:'10px'}}><Link to="/Openend">OPEN END FUNDS</Link></button>
            <button style={{margin:'10px'}}><Link to="/Fundmanagerb">FUND MANAGERS</Link></button>

        </div>
    </div>
        </div>
    );
}
export default HomeButton