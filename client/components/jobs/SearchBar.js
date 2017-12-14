import React, { Component } from 'react';


export default class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
    }
  }
  _handleChange(event) {
    this.setState({value: event.target.value});
    this.props.filterJobs(event.target.value)
  }
  render() {
    return (
      <div className="center-block ">
        <div className="row">
          <input className="center-input col-3 form-control" value={this.state.value} onChange={(event) => this._handleChange(event)} placeholder="Search for jobs" />
        </div>
        <div className="row d-flex justify-content-center">
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Location
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">California</a>
                    <a className="dropdown-item" href="#">Utah</a>
                    <a className="dropdown-item" href="#">New York</a>
                </div>
            </div>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Salary
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Above 50K</a>
                    <a className="dropdown-item" href="#">50K-75k</a>
                    <a className="dropdown-item" href="#">75k-100k</a>
                    <a className="dropdown-item" href="#">Above 100k</a>
                </div>
            </div>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Tags
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Front end</a>
                    <a className="dropdown-item" href="#">Back end</a>
                    <a className="dropdown-item" href="#">Fullstack</a>
                    <a className="dropdown-item" href="#">Game dev</a>
                    <a className="dropdown-item" href="#">Android Dev</a>
                    <a className="dropdown-item" href="#">Dev ops</a>
                    <a className="dropdown-item" href="#">Remote Ok</a>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
