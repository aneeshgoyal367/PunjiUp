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
          <Link to={{ pathname: `${url}/managerDetail`, state: { id: props.show.id } }}>{props.show.firstName}   {props.show.lastName}</Link>
        </h3></dt>
        
        <dt><h6>{props.show.companyName}</h6></dt>
      </dl>
      {/* <Router>
        <Switch>
          <Route path='/investor/fundManager/managerDetail' exact component={FundManagerdetail} />
        </Switch>
      </Router> */}
      <table>
        <tr>
          <th>Manager Id</th>
          <th>Educational Qualifications</th>
          <th>Email</th>
          <th>Experience</th>


        </tr>
        <tr>
        <td>{props.show.mgrId}</td>
          <td>{props.show.educationQualification}</td>
          <td>{props.show.email}</td>
          <td>{props.show.experience}</td>


        </tr>
      </table>


    </div>


  )
}
export default Showfund