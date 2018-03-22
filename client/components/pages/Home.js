import React, { Component } from "react";

import Job from "../jobs/Job";
import SearchBar from "../jobs/SearchBar";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.filterJobs = this.filterJobs.bind(this);
        this.state = {
            jobs: this.props.jobs
        };
    }
    filterJobs(term) {
        let jobs = this.props.jobs.slice();

        let filtered = jobs.filter(function(obj) {
            return obj.title.toLowerCase().indexOf(term) > -1;
        });

        this.setState({ jobs: filtered });
    }
    _renderList() {
        return this.state.jobs.map(job => {
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
        if (this.props.job) {
            return null;
        }
        return (
            <div className="container">
                <div className="hero">
                    <SearchBar filterJobs={this.filterJobs} />
                </div>
                <div className="jobs-list">{this._renderList()}</div>
            </div>
        );
    }
}
