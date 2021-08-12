import {React} from 'react'

function Bottom() {
    return (
        <div>
        <div className="box1">
 {/* <ul id="menu5"> */}
            <img src="assets/photos/fundpic.png" className="logo5" alt="logo" width="200" height="150" />
           <h1 className="picc">Best Fund Managers</h1>
           <h3 className="picc1">“When money realizes that it is in good hands, <br/>it wants to stay and multiply in those hands.”</h3>
           </div>
           <div className="box2">
            <dl className="upar">
                <dt><h3>Sankaran Naren</h3></dt>
                <dt><h6>ICICI Prudential Mutual Fun</h6></dt>

            </dl>
            <table>
                <tr>
                  <th>AUM</th>
                  <th>Schemes</th>
                  <th>Highest Returns</th>
                  

                </tr>
                <tr>
                  <td>₹1,11,005 Cr</td>
                  <td>38</td>
                  <td>+36.73%</td>
                 
                  
                </tr>
                </table>
         </div>
         <div className="box2">
            <dl className="upar">
                <dt><h3>Kunal Sangoi</h3></dt>
                <dt><h6>Aditya Birla Sun Life Mutual Fund</h6></dt>

            </dl>
            <table>
                <tr>
                  <th>AUM</th>
                  <th>Schemes</th>
                  <th>Highest Returns</th>
                  

                </tr>
                <tr>
                  <td>₹9,476 Cr</td>
                  <td>6</td>
                  <td>+34.39%</td>
                 
                  
                </tr>
                </table>
         </div>
        </div>
        
        )
}
export default Bottom