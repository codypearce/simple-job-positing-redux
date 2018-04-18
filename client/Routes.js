import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import requireAuthentication from "./requireAuthentication";

import JobIndex from "./containers/JobIndex";
import JobDetail from "./containers/JobDetail";
import JobCreate from "./containers/JobCreate";

export default class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={JobIndex} />
                <Route
                    exact
                    path="/jobs/create/"
                    component={requireAuthentication(JobCreate)}
                />
                <Route exact path="/jobs/:id" component={JobDetail} />
            </Switch>
        );
    }
}
