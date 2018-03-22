import React, { Component } from "react";
import { connect } from "react-redux";
import { selectJob } from "../actions/index";
import { bindActionCreators } from "redux";

import HomePage from "../components/pages/Home";

class JobList extends Component {
    render() {
        return <HomePage {...this.props} />;
    }
}

function mapStateToProps(state) {
    return {
        jobs: state.jobs,
        job: state.activeJob,
        filteredJobs: state.filteredJobs
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectJob: selectJob }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(JobList);
