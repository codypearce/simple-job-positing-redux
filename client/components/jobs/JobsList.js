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
      <div className="center-block">
        <input className="center-input" value={this.state.value} onChange={(event) => this._handleChange(event)} />
      </div>
    )
  }
}
