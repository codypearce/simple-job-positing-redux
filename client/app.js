import React, { Component } from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

import Header from "./components/shared/Header";
import JobsList from "./containers/JobsList";
import ActiveJob from "./containers/ActiveJob";
import AddJob from "./containers/AddJob";

require("./styles/style.css");

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Provider } from "react-redux";

import store from "./store/configureStore";

class App extends Component {
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

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
