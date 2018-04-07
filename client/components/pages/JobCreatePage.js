import React, { Component } from "react";
import PropTypes from "prop-types";

export default class JobCreatePage extends Component {
    constructor(props) {
        super(props);
    }
    static propTypes = {
        createJob: Proptypes.func.isRequired
    };

    _createJob() {
        this.props.createJob();
    }

    render() {
        return (
            <div className="container mt-5">
                <h3 className="text-center mb-5">Add Job</h3>
                <form className="input-group d-flex flex-column">
                    <input
                        className="form-control mb-3 w-50 mx-auto"
                        type="text"
                        placeholder="Title"
                    />
                    <input
                        className="form-control mb-3 w-50 mx-auto"
                        type="text"
                        placeholder="Company"
                    />
                    <input
                        className="form-control mb-3 w-50 mx-auto"
                        type="text"
                        placeholder="Location"
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
