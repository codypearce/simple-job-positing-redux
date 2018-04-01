import React, { Component } from "react";
import { connect } from "react-redux";

import JobDetailPage from "../components/pages/JobDetailPage";

class JobDetail extends Component {
    render() {
        return <JobDetailPage />;
    }
}

function mapStateToProps(state) {
    return {
        job: state.activeJob
    };
}

export default connect(mapStateToProps)(JobDetail);
