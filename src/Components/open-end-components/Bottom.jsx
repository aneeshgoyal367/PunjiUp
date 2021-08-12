import {React} from 'react'
import {Link} from 'react-router-dom'
function Bottom() {
    return (
        <div>
<h1>OPEN END FUNDS</h1>
    <p>An open ended fund is a fund which is officially launched after the NFO ends. It allows investors to enter and exit the fund anytime after they are launched. 
        Open-ended funds are suitable for investors who wish to invest in a liquid investment instrument and are willing to undertake market risk and cash flow risk for high returns.
        Open-ended funds provide high liquidity as they allow investors to redeem the fund units at any time they want. The fund units are redeemed at the fund’s net asset value (NAV) of the day on which units are redeemed.
             Unlike close-ended funds, the performance track record of an open-ended fund spanning across different market cycles is available. This allows investors to take a well-informed decision.
             Open-ended funds allow investors to make use of systematic plans both for the investment and withdrawal purposes. An investor cannot make use of SIPs, SWPs and STPs with close-ended funds.</p>
             <img src="assets\photos\openend.jfif"  className="center" alt="openpic" height="350" />
            <table>
                <tr>
                  <th>Fund Name</th>
                  <th>Expense Ratio(%)</th>
                  <th>5-Year Return</th>
                  <th>Net Assets(Cr)</th>

                </tr>
                <tr>
                  <td><Link to="/sbifund">SBI Small Cap Fund</Link></td>
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

        </div>
        )
    }
    export default Bottom