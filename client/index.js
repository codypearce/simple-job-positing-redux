import React, { Component } from "react";
import ReactDOM from "react-dom";
import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

require("./styles/style.css");

import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import store from "./store/configureStore";
import App from "./App";

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById("root")
);
