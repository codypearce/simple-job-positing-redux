import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { createJob } from "../actions/index";
import JobCreatePage from "../components/pages/CreateJobPage";

class JobCreate extends Component {
    render() {
        return <JobCreatePage createJob={this.props.createJob} />;
    }
}

JobCreate.propTypes = {
    fetchJob: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        createJob: id => dispatch(createJob(id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(JobCreate);
