
import React from "react";
import {
    Switch,
    Route,
    useRouteMatch
  } from "react-router-dom";

import Home from './home';
import TopicList from './topiclist';

import FundDetails from './fundDetails'


function TRoutes() {
    let { path } = useRouteMatch();
    return (
            <div>
                {path}
                <div>
                <Switch>
                    <Route exact path={`/testapp/home`}>
                        <Home />
                    </Route>
                    <Route exact path={`/testapp/fundetails`}>
                        <FundDetails />
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