
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";

import Home from './home';
import TopicList from './topiclist'


function TRoutes() {
    return (
            <div>
                <div>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/topics">
                        <TopicList />
                    </Route>
                </Switch>
                </div>

            </div>
    )
}

export default TRoutes;