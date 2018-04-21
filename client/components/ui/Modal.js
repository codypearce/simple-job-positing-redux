import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Modal extends Component {
    static propTypes = {
        title: PropTypes.string,
        modalButton: PropTypes.string,
        button: PropTypes.string,
        modal: PropTypes.string,
        primaryFunc: PropTypes.func,
        error: PropTypes.string
    };
    state = {
        email: "",
        password: ""
    };
    _handleChange(event, key) {
        this.setState({
            [key]: event.target.value
        });
    }
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
                        value={this.state.email}
                        onChange={(e, value) => this._handleChange(e, "email")}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        className="form-control"
                        aria-describedby="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={(e, value) =>
                            this._handleChange(e, "password")
                        }
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
                <button
                    type="button"
                    className="btn btn-primary"
                    data-dismiss="modal"
                    onClick={() => {
                        this.props.primaryFunc(this.state);
                    }}
                >
                    {this.props.modalButton}
                </button>
            </div>
        );
    }
    _renderError() {
        return (
            <span style={{ color: "red", fontSize: 12 }}>
                {this.props.error.message}
            </span>
        );
    }
    render() {
        const { button, modal, error } = this.props;
        return (
            <div>
                <button
                    type="button"
                    className="btn ml-3 mr-3"
                    data-toggle="modal"
                    data-target={`#${modal}`}
                >
                    {button}
                </button>

                <div
                    className="modal fade"
                    id={modal}
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
                            {error ? this._renderError() : null}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
