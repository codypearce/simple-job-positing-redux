import React, { Component } from 'react';
import { connect } from 'react-redux';

import Job from './Job';

class JobList extends Component {
  constructor() {
    super();
  }
  _renderList() {
    return this.props.jobs.map(job => {
      if(!job.show) { return; }

      return (
        <Job key={job.title} job={job} />
      )
    })
  }
  render() {
    return (
      <div className="container">
        {this._renderList()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    jobs: state.jobs,
  };
}

export default connect(mapStateToProps)(JobList);
