import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SubHeader extends Component {
    render() {
        return (
            <div className="mt-4">
                <h1 className="text-center my-2">Job Postings</h1>
                <nav className="d-flex justify-content-center mt-4">
                    <Link to="/" className="btn btn-primary">
                        Find a Job
                    </Link>
                    <Link to="/jobs/create" className="btn btn-secondary ml-1">
                        Add a Job
                    </Link>
                </nav>
            </div>
        );
    }
}
