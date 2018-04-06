import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { createJob } from "../actions/index";
import CreateJobPage from "../components/pages/CreateJobPage";

class CreateJob extends Component {
    render() {
        return <CreateJobPage createJob={this.props.createJob} />;
    }
}

CreateJob.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateJob);
