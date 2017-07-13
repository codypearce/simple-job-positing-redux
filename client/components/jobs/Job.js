import React, { Component } from 'react';


export default class Job extends Component {
  constructor() {
    super();
  }

  render() {
    const { job } = this.props;
    return (
      <div className="row my-4">
        <div className="col-4">
          <h2>{job.title}</h2>
          <p>{job.company}</p>
        </div>
        <div className="col">
        <p>{job.salary}</p>
        </div>
        <div  className="col">
          <p>{job.location}</p>
        </div>
        <div  className="col">
          <button className="btn btn-primary">Apply</button>
          <button className="btn btn-warn">Not Interested</button>
        </div>
      </div>
    )
  }
}
