import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { createJob } from "../actions/jobActions";
import JobCreatePage from "../components/pages/JobCreatePage";

class JobCreate extends Component {
    static propTypes = {
        history: PropTypes.object,
        createJob: PropTypes.func.isRequired
    };
    render() {
        return (
            <JobCreatePage
                createJob={this.props.createJob}
                history={this.props.history}
            />
        );
    }
}

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        createJob: id => dispatch(createJob(id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(JobCreate);
