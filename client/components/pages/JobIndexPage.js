import React, { Component } from "react";
import PropTypes from "prop-types";

import Job from "../ui/Job";
import SearchBar from "../ui/SearchBar";

export default class JobIndexPage extends Component {
    static propTypes = {
        jobs: PropTypes.array,
        searchJobs: PropTypes.func.isRequired,
        selectJob: PropTypes.func.isRequired
    };
    state = {
        jobs: this.props.jobs
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
                <Job key={job._id} job={job} selectJob={this.props.selectJob} />
            );
        });
    }
    render() {
        const { jobs } = this.props;
        if (!jobs) {
            return null;
        }
        if (jobs && jobs.length < 1) {
            return (
                <div className="container">
                    <div className="hero">
                        <SearchBar
                            filterJobs={value => this._searchJobs(value)}
                        />
                    </div>

                    <h3 className="text-center">Sorry No Jobs</h3>
                </div>
            );
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
