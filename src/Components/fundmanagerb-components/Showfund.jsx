import { React } from 'react'
import { Link, useRouteMatch, BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import FundManagerdetail from '../../pages/FundManagerdetail'
function Showfund(props) {
  let { path, url } = useRouteMatch();
  return (

    <div className="box2">
      <dl className="upar">
        <dt><h3>
          {/* <Link to="ideas" params={{ testvalue: "hello" }}>Create Idea</Link> */}
          <Link to={{ pathname: `${url}/managerDetail`, state: { id: props.show.id } }}>{props.show.ManagerName}</Link>
        </h3></dt>
        <dt><h6>{props.show.FundName}</h6></dt>
      </dl>
      {/* <Router>
        <Switch>
          <Route path='/investor/fundManager/managerDetail' exact component={FundManagerdetail} />
        </Switch>
      </Router> */}
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