import React, { Component } from "react";
import { connect } from "react-redux";

import ActiveJobPage from "../components/pages/ActiveJobPage";

class ActiveJob extends Component {
    render() {
        return <ActiveJobPage />;
    }
}

function mapStateToProps(state) {
    return {
        job: state.activeJob
    };
}

export default connect(mapStateToProps)(ActiveJob);
