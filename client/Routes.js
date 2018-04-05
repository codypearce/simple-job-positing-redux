import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import JobIndex from "./containers/JobIndex";
import JobDetail from "./containers/JobDetail";
import CreateJob from "./containers/CreateJob";

export default class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={JobIndex} />
                <Route exact path="/jobs/create/" component={CreateJob} />
                <Route exact path="/jobs/:id" component={JobDetail} />
            </Switch>
        );
    }
}
