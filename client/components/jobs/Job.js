import React, { Component } from 'react';


export default class Job extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="row">
        <div className="col">
          <h2>Job Name</h2>
          <p>Company Name</p>
        </div>
        <div className="col">
        <p>Salary</p>
        </div>
        <div  className="col">
          <p>Location</p>
        </div>
        <div  className="col">
          <button className="btn btn-primary">Apply</button>
          <button className="btn btn-warn">Not Interested</button>
        </div>
      </div>
    )
  }
}
