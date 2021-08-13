
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
    let { path, url } = useRouteMatch();
    console.log(path);
    return (
            <div>
                {path}
                <div>
                <Switch>
                    <Route exact path={`/testapp/home`}>
                        <Home />
                    </Route>
                    <Route path={`/testapp/topics`}>
                        <TopicList />
                    </Route>
                </Switch>
                </div>

            </div>
    )
}

export default TRoutes;