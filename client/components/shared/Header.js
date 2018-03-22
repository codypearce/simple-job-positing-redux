import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
        <div className="mt-4">
            <h1 className="text-center my-2">Job Postings</h1>
            <nav className="d-flex justify-content-center mt-4">
                <Link to="/#jobs-search" className="btn btn-primary">Find a Job</Link>
                <Link to="/job/new" className="btn btn-secondary ml-1">Add a Job</Link>
            </nav>
        </div>

    )
  }
}
