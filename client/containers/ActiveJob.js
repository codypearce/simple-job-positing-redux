import React, { Component } from 'react';
import { connect } from 'react-redux';

class ActiveJob extends Component {
  constructor(props) {
    super(props);
    this.state = {
      job: this.props.job ? this.props.job : null,
    }
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.job !== this.state.job) {
      this.setState({job: nextProps.job})
    }
  }
  _renderJob() {
    const { job } = this.props;
    return (
      <div className="container">
        <div className="row my-4">
          <div className="col-4">
            <h2 className="pointer" onClick={() => this._handleClick()}>{job.title}</h2>
            <p>{job.company}</p>
          </div>
          <div className="col">
          <p>{job.salary}</p>
          </div>
          <div className="col">
            <p>{job.location}</p>
          </div>
          <div  className="col">
            <button className="btn btn-primary">Apply</button>
            <button className="btn btn-warn">Not Interested</button>
          </div>
        </div>
      </div>
      )
  }
  render() {
    const { job } = this.props;
    console.log(this.props)
    return (
      <div>
      {this.props.job ? this._renderJob() : null}
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
