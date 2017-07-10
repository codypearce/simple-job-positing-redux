import React, { Component } from 'react';


export default class Job extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="row">
        <div>
          <h2>Job Name</h2>
          <p>Company Name</p>
        </div>
        <p>Salary</p>
        <p>Location</p>
        <div>
          <button className="btn btn-primary">Apply</button>
          <button className="btn btn-warn">Not Interested</button>
        </div>
      </div>
    )
  }
}
