import React, { Component } from "react";

export default class AddJobPage extends Component {
    constructor(props) {
        super(props);
    }

    _onFormSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div className="container">
                <h3 className="text-center mb-5">Add Job</h3>
                <form
                    onSubmit={event => this._onFormSubmit(event)}
                    className="input-group d-flex flex-column"
                >
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
                        type="submit"
                        className="btn btn-primary w-50 mx-auto"
                    >
                        Add Job
                    </button>
                </form>
            </div>
        );
    }
}
