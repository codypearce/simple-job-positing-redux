import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from "./components/shared/Header";
import JobIndex from "./containers/JobIndex";
import JobDetail from "./containers/JobDetail";
import AddJob from "./containers/AddJob";

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <Route exact path="/" component={JobIndex} />
                    <Route path="/job/:id" component={JobDetail} />
                    <Route path="/job/new" component={AddJob} />
                </div>
            </Router>
        );
    }
}
