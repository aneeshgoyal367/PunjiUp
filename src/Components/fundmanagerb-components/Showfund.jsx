import { React } from 'react'
import {Link} from 'react-router-dom'
function Showfund(props) {
  return (

    <div className="box2">
      <dl className="upar">
        <dt><h3><Link to='./managerprofile'>{props.show.ManagerName}</Link></h3></dt>
        <dt><h6>{props.show.FundName}</h6></dt>
      </dl>
      <table>
        <tr>
          <th>AUM</th>
          <th>Schemes</th>
          <th>Highest Returns</th>


        </tr>
        <tr>
          <td>{props.show.AUM}</td>
          <td>{props.show.Schemes}</td>
          <td>{props.show.HighestReturns}</td>


        </tr>
      </table>


    </div>


  )
}
export default Showfund