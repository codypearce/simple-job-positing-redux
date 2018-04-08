import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { fetchJob } from "../actions/index";
import JobDetailPage from "../components/pages/JobDetailPage";

class JobDetail extends Component {
    componentWillMount() {
        this.props.fetchJob(this.props.match.params.id);
    }
    render() {
        return <JobDetailPage job={this.props.job} />;
    }
}

JobDetail.propTypes = {
    job: PropTypes.object,
    fetchJob: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        job: state.jobs.job
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchJob: id => dispatch(fetchJob(id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(JobDetail);
