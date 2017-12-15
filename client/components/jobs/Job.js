import React, { Component } from 'react';


export default class Job extends Component {
  constructor(props) {
    super(props);
  }
  _handleClick() {
    this.props.selectJob(this.props.job)
  }
  _renderTags() {
      return this.props.job.tags.map((tag) => {
          return <span key={tag} className='tag'>{tag}</span>
      })
  }
  render() {
    const { job } = this.props;
    return (
      <div className="row my-5">
        <div className="col-4">
          <h2 className="pointer" onClick={() => this._handleClick()}>{job.title}</h2>
          <div className="d-flex flex-row align-items-center">
            <p className="mb-0">{job.company}</p>
            <span className="mx-2">-</span>
            <small> {job.location}</small>
          </div>
        </div>
        <div className="col">
            <p>${job.salary}</p>
        </div>
        <div className="col">
          {this._renderTags()}
        </div>
        <div  className="col">
          <button className="btn btn-primary">Apply</button>
          <button className="btn btn-warn">Not Interested</button>
        </div>
      </div>
    )
  }
}
