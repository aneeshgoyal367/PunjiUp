import {React} from 'react'
import {Link} from 'react-router-dom'
function Showopen(props) {
  // console.log(props)
    return (
        <div>
            

<table>
  
                 {/* <tr>
                  <th>Fund Name</th>
                  <th>Expense Ratio</th>
                  <th>5-Year Return</th>
                 <th> Net Assets</th>

                </tr>
                */}
                <tr>
                 <th>{props.show.first}</th>
                 <th>{props.show.second}</th>
                 <th>{props.show.third}</th>
                 <th>{props.show.fourth}</th>
                 </tr>
                 <tr>
                  <td><Link to="/sbifund">{props.show.FundName}</Link></td>
                  <td>{props.show.ExpenseRatio}</td>
                  <td>{props.show.FiveYearReturn}</td>
                  <td>{props.show.NetAssets}</td>
                </tr>
               
                </table>

        </div>
        
        )
    }
    export default Showopen