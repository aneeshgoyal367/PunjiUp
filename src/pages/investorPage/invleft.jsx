import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";



export default function InvLeft() {
    let { path, url } = useRouteMatch();
  return (
    <Router>
      <div>
      <h2>Hi Neelmani.. Investor Left 1 page...</h2>
        <ul>
          <li>
            <Link to={`/profile2`}>Profile 2</Link>
          </li>
        </ul>

        <hr />

        <Switch>
            <Route exact path={`/profile2`}>
                Profile 2 component...
            </Route>
        </Switch>

        
      </div>
    </Router>
  );
}

