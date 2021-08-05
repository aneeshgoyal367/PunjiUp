import React from 'react'
function HomeButton(){
    let mystyle={margin:"auto",maxWidth:'300px'}
    return (
        <div>
             <h1 className="hi1">Discover Mutual Funds</h1>
    <p className="hi2">Search Mutual Funds, Fund Manager etc.</p>

    <form className="example" action="/action_page.php" style={mystyle}>
        <input type="text" placeholder="Search.." name="search2" />
        <button type="submit"><i class="fa fa-search"></i></button>
    </form>
    <div className="btn-group">
        <div className="center1">

            <button style={{margin:'10px'}}>CLOSED END FUNDS</button>
            <button style={{margin:'10px'}}>OPEN END FUNDS</button>
            <button style={{margin:'10px'}}>FUND MANAGERS</button>

        </div>
    </div>
        </div>
    );
}
export default HomeButton