import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchJob } from "../actions/index";
import JobDetailPage from "../components/pages/JobDetailPage";

class JobDetail extends Component {
    componentWillMount() {
        this.props.fetchJob();
    }
    render() {
        return <JobDetailPage />;
    }
}

function mapStateToProps(state) {
    return {
        job: state.activeJob
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchJob: id => dispatch(fetchJob(id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(JobDetail);
