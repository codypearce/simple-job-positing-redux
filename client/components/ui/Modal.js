import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Modal extends Component {
    static propTypes = {
        title: PropTypes.string,
        modalButton: PropTypes.string,
        button: PropTypes.string
    };
    _renderHeader() {
        return (
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                    {this.props.title}
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
        );
    }
    _renderBody() {
        return (
            <div className="modal-body">
                <div className="form-group">
                    <input
                        type="email"
                        className="form-control"
                        aria-describedby="emailHelp"
                        placeholder="Email"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        className="form-control"
                        aria-describedby="password"
                        placeholder="Password"
                    />
                </div>
            </div>
        );
    }
    _renderFooter() {
        return (
            <div className="modal-footer">
                <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                >
                    Cancel
                </button>
                <button type="button" className="btn btn-primary">
                    {this.props.modalButton}
                </button>
            </div>
        );
    }
    render() {
        const { button } = this.props;
        return (
            <div>
                <button
                    type="button"
                    className="btn ml-3 mr-3"
                    data-toggle="modal"
                    data-target="#loginModal"
                >
                    {button}
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
                            {this._renderHeader()}
                            {this._renderBody()}
                            {this._renderFooter()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
