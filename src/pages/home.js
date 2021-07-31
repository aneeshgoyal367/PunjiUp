import React from 'react';

class Home extends React.Component{
    render(){
        return(
        <div>
            <table>
        <tr>
            <th><img src="assets\photos\logo.png" class="logo" alt="logo" width="300" height="150" /></th>
            <ul id="menu">

             {/* <!-- <li><img src="cart.png" class="cart" width="50" height="50"></li>
                <li>Buy</li> --> */}

                <li><a href="assets\html pages\Sign-up-page.html">SignUp</a></li>
                <li><a href="assets\html pages\Sign-in-page.html">SignIn</a></li>


                <li><a href="assets\html pages\aboutus.html">About Us</a></li>
                <li><a href="assets\html pages\contactus.html">Contact Us</a></li>
            </ul>
        </tr>
    </table>
    <div className="slideshow-container">

        <div className="mySlides fade">
            <div className="numbertext">1 / 3</div>
            <img src="assets\photos\a1.jpg" alt="firstsliderimage" style={{width:"100%"}} />
            <div className="text"></div>
        </div>

        <div className="mySlides fade">
            <div className="numbertext">2 / 3</div>
            <img src="assets\photos\1.jpg" alt="secondsliderimage" style={{width:"100%"}} />
            <div className="text"></div>
        </div>

        <div className="mySlides fade">
            <div className="numbertext">3 / 3</div>
            <img src="assets\photos\5.jpg" alt="thirdsliderimage" style={{width:"100%"}} />
            <div className="text"></div>
        </div>

        <a className="prev" onclick={()=>plusSlides(-1)}>&#10094;</a>
        <a className="next" onclick={()=>plusSlides(1)}>&#10095;</a>

    </div>
    <br/>

    <div style="text-align:center">
        <span className="dot" onclick="currentSlide(1)"></span>
        <span className="dot" onclick="currentSlide(2)"></span>
        <span className="dot" onclick="currentSlide(3)"></span>
    </div>

    
    <h1 className="hi1">Discover Mutual Funds</h1>
    <p className="hi2">Search Mutual Funds, Fund Manager etc.</p>

    <form className="example" action="/action_page.php" style="margin:auto;max-width:300px">
        <input type="text" placeholder="Search.." name="search2" />
        <button type="submit"><i class="fa fa-search"></i></button>
    </form>
    <div className="btn-group">
        <div className="center1">

            <button style={{margin: "10px;"}}><a href="assets\html pages\closedend.html">CLOSED END FUNDS</a></button>
            <button style={{margin: "10px;"}}><a href="assets\html pages\openend.html">OPEN END FUNDS</a></button>
            <button style={{margin: "10px;"}}>FUND MANAGERS</button> 
            {/* add a link for fund manager */}

        </div>
    </div>
        </div>
        );
    }
}

export default Home;
