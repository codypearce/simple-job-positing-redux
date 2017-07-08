import React, { Component } from 'react';


export default class JobList extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
    }
  }
  _handleChange(event) {
    this.setState({value: event.target.value});
  }
  render() {
    return (
      <div className="center-block ">
        <div className="row">
          <input className="center-input col-3 form-control" value={this.state.value} onChange={(event) => this._handleChange(event)} placeholder="Search for jobs" />
        </div>
      </div>
    )
  }
}
