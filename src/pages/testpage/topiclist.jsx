
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";

import T1 from './topic1'
import T2 from './topic2'
import T3 from './topic3'


function Topiclist() {
   // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
  let { path, url } = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/rendering`}>
          <T1 />
        </Route>
        <Route path={`${path}/components`}>
          <T2 />
        </Route>
        <Route path={`${path}/props-v-state`}>
          <T3 />
        </Route>
      </Switch>
    </div>
  );
  }
  
export default Topiclist;