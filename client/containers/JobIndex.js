import React, { Component } from "react";
import { connect } from "react-redux";
import { selectJob, fetchJobs } from "../actions/index";
import { bindActionCreators } from "redux";

import JobIndexPage from "../components/pages/JobIndexPage";

class JobIndex extends Component {
    componentWillMount() {
        this.props.fetchJobs();
    }
    render() {
        return <JobIndexPage {...this.props} />;
    }
}

function mapStateToProps(state) {
    return {
        jobs: state.jobs.jobs,
        job: state.jobs,
        filteredJobs: state.filteredJobs
    };
}

function mapDispatchToProps(dispatch) {
    return {
        selectJob: job => dispatch(selectJob(job)),
        fetchJobs: () => dispatch(fetchJobs())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(JobIndex);
