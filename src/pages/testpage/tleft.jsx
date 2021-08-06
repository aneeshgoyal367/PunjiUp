import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

import TRoutes from './troutes';

// import Home from './home';
// import TopicList from './topiclist'



export default function TLeft() {
    let { path, url } = useRouteMatch();
  return (
    <Router>
      <div>
      <h2>Hi Neelmani.. Test Left 1 page...</h2>
        <ul>
          <li>
            <Link to={`${url}/home`}>Home</Link>
          </li>
          <li>
            <Link to={`${url}/topics`}>Topics</Link>
          </li>
        </ul>

        <hr />

        <TRoutes/>
            {/* 
            Below part moves to separate roouting components
            <Switch>
                    <Route path={`${path}/home`}>
                        <Home/>
                    </Route>
                    <Route path={`${path}/topics`}>
                        <TopicList />
                    </Route>
                </Switch> */}
        
      </div>
    </Router>
  );
}

