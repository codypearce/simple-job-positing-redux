import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectJob } from '../actions/index';
import { bindActionCreators } from 'redux';

import Job from '../components/jobs/Job';

class JobList extends Component {
  constructor(props) {
    super(props);
  }
  _renderList() {
    return this.props.jobs.map(job => {
      if(!job.show) { return; }

      return (
        <Job key={job.title} job={job} selectJob={this.props.selectJob} />
      )
    })
  }
  render() {
    if(this.props.job) {
      return null;
    }
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
    job: state.activeJob,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectJob: selectJob}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(JobList);
