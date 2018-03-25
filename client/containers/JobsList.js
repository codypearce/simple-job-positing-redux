import React, { Component } from "react";
import { connect } from "react-redux";
import { selectJob, fetchJobs } from "../actions/index";
import { bindActionCreators } from "redux";

import HomePage from "../components/pages/Home";

class JobList extends Component {
    componentWillMount() {
        this.props.fetchJobs();
    }
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
    return {
        selectJob: job => dispatch(selectJob(job)),
        fetchJobs: () => dispatch(fetchJobs())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(JobList);
