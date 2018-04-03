import React, { Component } from "react";
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
