import React, { Component } from "react";
import PropTypes from "prop-types";

import Job from "../shared/Job";
import SearchBar from "../shared/SearchBar";

export default class JobIndexPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobs: this.props.jobs
        };
    }
    static propTypes = {
        jobs: PropTypes.array,
        searchJobs: PropTypes.func.isRequired
    };

    _searchJobs(term) {
        this.props.searchJobs(term);
    }
    _renderList() {
        return this.props.jobs.map(job => {
            if (!job) {
                return;
            }

            return (
                <Job
                    key={job.title}
                    job={job}
                    selectJob={this.props.selectJob}
                />
            );
        });
    }
    render() {
        if (!this.props.jobs) {
            return null;
        }

        return (
            <div className="container">
                <div className="hero">
                    <SearchBar filterJobs={value => this._searchJobs(value)} />
                </div>
                <div className="jobs-list">{this._renderList()}</div>
            </div>
        );
    }
}
