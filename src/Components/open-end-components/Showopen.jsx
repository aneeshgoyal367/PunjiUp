import {React} from 'react'
function Showopen(props) {
  // console.log(props)
    return (
        <div>
            

<table>
                <tr>
                  <th>Fund Name</th>
                  <th>Expense Ratio</th>
                  <th>5-Year Return</th>
                 <th> Net Assets</th>

                </tr>
                <tr>
                  <td>{props.show.FundName}</td>
                  <td>{props.show.ExpenseRatio}</td>
                  <td>{props.show.FiveYearReturn}</td>
                  <td>{props.show.NetAssets}</td>
                </tr>
                </table>

        </div>
        
        )
    }
    export default Showopen