import {React} from 'react'
function Bottom() {
    return (
        <div>
           <div className="about-section">
    <h1>About Us</h1>
    <p>Simplifying Financial Journey of Digital India</p>
    <p>Hello India!
      Invest in Mutual Funds
      Get upto 1% higher returns with direct plans.</p>
  </div>

  <h2 style={{textAlign:'center'}}>Our Team</h2>


  <div className="row">
    <div className="column">
      <div className="card">
        <img src="assets\photos\md.png" alt="Jane" style={{width:'100%'}} />
        <div className="container">
          <h2>Md Shahzad</h2>
          <p className="title">Founder</p>
          <p></p>
          <p>md@gmail.com</p>
          <p><button className="button">Contact</button></p>
        </div>
      </div>
    </div>

    <div className="column">
      <div className="card">
        <img src="assets\photos\priya.png" alt="Mike" style={{width:'100%'}} />
        <div className="container">
          <h2>Priya Goenka</h2>
          <p className="title">Founder</p>
          <p></p>
          <p>priya@gmail.com</p>
          <p><button className="button">Contact</button></p>
        </div>
      </div>
    </div>

    <div className="column">
      <div className="card">
        <img src="assets\photos\aneesh.png" alt="John" style={{width:'100%'}} />
        <div className="container">
          <h2>Aneesh Goyal</h2>
          <p className="title">Founder</p>
          <p></p>
          <p>aneesh@gmail.com</p>
          <p><button className="button">Contact</button></p>
        </div>
      </div>
    </div>

    <div className="column">
      <div className="card">
        <img src="assets\photos\neel.png" alt="John" style={{width:'100%'}} />
        <div className="container">
          <h2>Neelmani Singh</h2>
          <p className="title">Founder</p>
          <p></p>
          <p>neelmani@gmail.com</p>
          <p><button className="button">Contact</button></p>
        </div>
      </div>
    </div>
  </div>
        </div>
    )
}
export default Bottom