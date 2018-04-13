import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { fetchJobs, searchJobs } from "../actions/jobActions";
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

JobIndex.propTypes = {
    jobs: PropTypes.array,
    fetchJobs: PropTypes.func.isRequired,
    searchJobs: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        jobs: state.jobs.jobs
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchJobs: () => dispatch(fetchJobs()),
        searchJobs: query => dispatch(searchJobs(query))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(JobIndex);
