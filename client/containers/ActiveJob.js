import React, { Component } from 'react';
import { connect } from 'react-redux';

class ActiveJob extends Component {
  constructor(props) {
    super(props);
  }

  _renderJob() {
    const { job } = this.props;
    return (
      <div className="container">
        <div className="backBtn">
          <button className="btn">Back to jobs</button>
        </div>
        <div className="text-center my-4">
            <h2 className="pointer">{job.title}</h2>
            <p>{job.company}</p>
        </div>
        <div className="my-4">
          <p>{job.description}</p>
        </div>
        <div className="my-4">
          <p>Compensation: {job.salary}</p>
          <p>Location: {job.location}</p>
          <div className="text-center">
            <button className="btn btn-primary">Apply</button>
            <button className="btn btn-warn">Not Interested</button>
          </div>
        </div>
      </div>
      )
  }
  render() {
    return (
      <div>
      {this.props.job ? this._renderJob() : <div>No job Selected</div>}
    </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    job: state.activeJob,
  };
}

export default connect(mapStateToProps)(ActiveJob);
