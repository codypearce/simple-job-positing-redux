import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from "./components/shared/Header";
import JobsList from "./containers/JobsList";
import ActiveJob from "./containers/ActiveJob";
import AddJob from "./containers/AddJob";

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <Route exact path="/" component={JobsList} />
                    <Route exact path="/job" component={ActiveJob} />
                    <Route path="/job/new" component={AddJob} />
                </div>
            </Router>
        );
    }
}
