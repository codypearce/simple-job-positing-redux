import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default class JobDetailPage extends Component {
    static propTypes = {
        job: PropTypes.object
    };

    _renderJob() {
        const { job } = this.props;
        return (
            <div className="container">
                <div className="text-center my-4">
                    <h2 className="pointer">{job.title}</h2>
                    <p>{job.company}</p>
                </div>
                <div className="my-4">
                    <p>{job.description}</p>
                </div>
                <div className="my-4">
                    <p>Compensation: {job.salary}</p>
                    <p>Location: {job.location}</p>
                    <div className="text-center">
                        <button className="btn btn-primary">Apply</button>
                        <Link to="/" className="btn btn-warn ml-1">
                            Not Interested
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
    render() {
        return (
            <div>
                <Link to="/" className="btn btn-warn backBtn">
                    Back to jobs
                </Link>

                {this.props.job ? (
                    this._renderJob()
                ) : (
                    <div>No job Selected</div>
                )}
            </div>
        );
    }
}
