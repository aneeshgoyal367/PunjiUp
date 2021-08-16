import {React} from 'react'
function Show(props) {
    return (
        <div>
            

<table>
                <tr>
                  <th>{props.show.first}</th>
                  <th>{props.show.second}</th>
                  <th>{props.show.third}</th>
                  <th>{props.show.fourth}</th>
                  <th>{props.show.fifth}</th>

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