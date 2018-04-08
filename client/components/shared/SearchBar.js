import React, { Component } from "react";
import PropTypes from "prop-types";

export default class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
            value: ""
        };
    }
    static propTypes = {
        filterJobs: PropTypes.func.isRequired
    };
    _handleChange(event) {
        this.setState({ value: event.target.value });
        this.props.filterJobs(event.target.value);
    }
    render() {
        return (
            <div id="jobs-search" className="center-block ">
                <div className="row">
                    <input
                        className="center-input col-3 form-control"
                        value={this.state.value}
                        onChange={event => this._handleChange(event)}
                        placeholder="Search for jobs"
                    />
                </div>
            </div>
        );
    }
}
