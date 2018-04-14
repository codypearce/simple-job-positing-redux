import React, { Component } from "react";
import PropTypes from "prop-types";

export default class LoginModal extends Component {
    render() {
        return (
            <div>
                <button
                    type="button"
                    className="btn ml-3 mr-3"
                    data-toggle="modal"
                    data-target="#loginModal"
                >
                    Login
                </button>

                <div
                    className="modal fade"
                    id="loginModal"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="loginModal"
                    aria-hidden="true"
                >
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5
                                    className="modal-title"
                                    id="exampleModalLabel"
                                >
                                    Login
                                </h5>
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        placeholder="Email"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="password"
                                        placeholder="Password"
                                    />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-dismiss="modal"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                >
                                    Login
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
