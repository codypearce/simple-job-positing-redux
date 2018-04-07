import React, { Component } from "react";
import PropTypes from "prop-types";

export default class JobCreatePage extends Component {
    static propTypes = {
        createJob: PropTypes.func.isRequired
    };
    state = {
        title: "",
        company: "",
        location: "",
        description: "",
        salary: "",
        tags: []
    };

    _createJob() {
        this.props.createJob();
    }
    _handleUpdate(e, name) {
        console.log(e.target.value, name);
        this.setState({
            [name]: e.target.value
        });
    }

    render() {
        console.log(this.state);
        return (
            <div className="container mt-5">
                <h3 className="text-center mb-5">Add Job</h3>
                <form className="input-group d-flex flex-column">
                    <input
                        className="form-control mb-3 w-50 mx-auto"
                        onChange={e => this._handleUpdate(e, "title")}
                        value={this.state.title}
                        type="text"
                        placeholder="Title"
                    />
                    <input
                        className="form-control mb-3 w-50 mx-auto"
                        onChange={e => this._handleUpdate(e, "company")}
                        value={this.state.company}
                        type="text"
                        placeholder="Company"
                    />
                    <input
                        className="form-control mb-3 w-50 mx-auto"
                        type="text"
                        placeholder="Location"
                        onChange={e => this._handleUpdate(e, "location")}
                        value={this.state.location}
                    />
                    <div className="form-group">
                        <label
                            htmlFor="textarea"
                            className="d-block text-center mx-auto"
                        >
                            Description
                        </label>
                        <textarea
                            className="form-control mb-3 w-50 mx-auto"
                            id="textarea"
                            onChange={e => this._handleUpdate(e, "description")}
                            value={this.state.description}
                            rows="3"
                        />
                    </div>
                    <button
                        onClick={() => this._createJob()}
                        className="btn btn-primary w-50 mx-auto"
                    >
                        Add Job
                    </button>
                </form>
            </div>
        );
    }
}
