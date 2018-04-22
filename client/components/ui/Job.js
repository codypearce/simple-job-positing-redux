import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default class Job extends Component {
    constructor(props) {
        super(props);
    }
    static propTypes = {
        job: PropTypes.object.isRequired
    };

    _renderTags() {
        return this.props.job.tags.map(tag => {
            return (
                <span key={tag} className="tag">
                    {tag}
                </span>
            );
        });
    }
    render() {
        const { job } = this.props;

        return (
            <div className="row my-5">
                <div className="col-4">
                    <h2 className="pointer">
                        <Link to={`/jobs/${job.id}`}>{job.title}</Link>
                    </h2>
                    <div className="d-flex flex-row align-items-center">
                        <p className="mb-0">{job.company}</p>
                        <span className="mx-2">-</span>
                        <small> {job.location}</small>
                    </div>
                </div>
                <div className="col">
                    <p>${job.salary}</p>
                </div>
                <div className="col">
                    {this.props.job.tags && this.props.job.tags.length > 0
                        ? this._renderTags()
                        : null}
                </div>
                <div className="col">
                    <button className="btn btn-primary">Apply</button>
                </div>
            </div>
        );
    }
}
