import {React} from 'react'
function Show(props) {
    return (
        <div>
            

<table>
                <tr>
                  <th>Fund Name</th>
                  <th>Fund Assets</th>
                  <th>1-Year Return</th>
                  <th>3-Year Return</th>
                  <th>5-Year Return</th>

                </tr>
                <tr>
                  <td>{props.show.FundName}</td>
                  <td>{props.show.FundAssets}</td>
                  <td>{props.show.OneYearReturn}</td>
                  <td>{props.show.ThreeYearReturn}</td>
                  <td>{props.show.FiveYearReturn}</td>
                  
                </tr>
                </table>

        </div>
        
        )
    }
    export default Show