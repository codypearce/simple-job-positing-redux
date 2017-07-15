import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectJob } from '../../actions/index';
import { bindActionCreators } from 'redux';

import Job from './Job';

class JobList extends Component {
  constructor() {
    super();
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectJob: selectJob}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(JobList);
