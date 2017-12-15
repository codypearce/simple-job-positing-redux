import React, { Component } from 'react';


export default class Header extends Component {
  render() {
    return (
        <div className="mt-4">
            <h1 className="text-center my-2">Job Postings</h1>
            <nav className="d-flex justify-content-center mt-4">
                <a href="#jobs-search" className="btn btn-primary">Find a Job</a>
                <a href="#" className="btn btn-secondary ml-1">Add a Job</a>
            </nav>
        </div>

    )
  }
}
