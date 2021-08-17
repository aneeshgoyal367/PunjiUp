import React from "react";

function T1() {
    return (
        <div className="T1">
          <h3>List of All Funds</h3>
          <table>
                <tr>
                  <th>Fund Name(OPEN-ENDED)</th>
                  <th>Expense Ratio(%)</th>
                  <th>5-Year Return</th>
                  <th>Net Assets(Cr)</th>

                </tr>
                <tr>
                  <td>SBI Small Cap Fund</td>
                  <td>2.29</td>
                  <td>17.51</td>
                  <td>2,704</td>
                  
                </tr>
                <tr>
                    <td>Mirae Asset Emerging Bluechip Fund</td>
                    <td>1.78</td>
                    <td>16.8</td>
                    <td>8,219</td>
                    
                </tr>
                <tr>
                    <td>Canara Robeco Consumer Trends Fund</td>
                    <td>2.68</td>
                    <td>13.52</td>
                    <td>354</td>
                </tr>
                <tr>
                    <td>Aditya Birla Sun Life Banking & Financial Services Fund</td>
                    <td>2.41</td>
                    <td>15.11</td>
                    <td>1,806</td>
                    
                </tr>
                <tr>
                    <td>Motilal Oswal NASDAQ 100 Exchange Traded Fund</td>
                    <td>0.54</td>
                    <td>17.35</td>
                    <td>218</td>
                    
                </tr>
                <tr>
                    <td>ICICI Prudential Banking and Financial Services Fund</td>
                    <td>2.12</td>
                    <td>14.65</td>
                    <td>3,290</td>
                    
                </tr>
              </table>
              <table>
                <tr>
                    <th>Fund Name(CLOSED-ENDED)</th>
                    <th>Fund Assets(Cr)</th>
                    <th>1 Year Return</th>
                    <th>3 Year Return</th>
                    <th>5 Year Return</th>

                </tr>
                <tr>
                    <td>SBI Small Cap Fund</td>
                    <td>2,704</td>
                    <td>8.33%</td>
                    <td>11.28%</td>
                    <td>17.04%</td>
                </tr>
                <tr>
                    <td>Mirae Asset Emerging Bluechip Fund</td>
                    <td>8,219</td>
                    <td>18.27%</td>
                    <td>14.40%</td>
                    <td>17.53%</td>
                </tr>
                <tr>
                    <td>Canara Robeco Emerging Equities Fund</td>
                    <td>5,235</td>
                    <td>10.38%</td>
                    <td>11.25%</td>
                    <td>13.89%</td>
                </tr>
                <tr>
                    <td>Nippon India Small Cap Fund (earlier Reliance Small Cap Fund)</td>
                    <td>8,425</td>
                    <td>-2.60%</td>
                    <td>8.14%</td>
                    <td>11.82%</td>
                </tr>
                <tr>
                    <td>Kotak Emerging Equity Scheme</td>
                    <td>4,960</td>
                    <td>11.35%</td>
                    <td>8.38%</td>
                    <td>12.89%</td>
                </tr>
                <tr>
                    <td>ICICI Prudential All Seasons Bond Fund</td>
                    <td>2,816</td>
                    <td>11.28%</td>
                    <td>8.24%</td>
                    <td>9.91%</td>
                </tr>
            </table>
        </div>
      );
}

export default T1;
// import {React} from 'react'
// import {Link} from 'react-router-dom'
// function allfund(props) {
 
//     return (
//         <div>
            

// <table>
  
                 
//                 <tr>
//                  <th>{props.show.first}</th>
//                  <th>{props.show.second}</th>
//                  <th>{props.show.third}</th>
//                  <th>{props.show.fourth}</th>
//                  </tr>
//                  <tr>
//                   <td><Link to="/sbifund">{props.show.FundName}</Link></td>
//                   <td>{props.show.ExpenseRatio}</td>
//                   <td>{props.show.FiveYearReturn}</td>
//                   <td>{props.show.NetAssets}</td>
//                 </tr>
               
//                 </table>

//         </div>
        
//         )
//     }
//     export default allfund