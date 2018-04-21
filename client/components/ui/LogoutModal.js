import React, { Component } from "react";
import PropTypes from "prop-types";

import Modal from "./Modal";

export default class LoginModal extends Component {
    static propTypes = {
        logout: PropTypes.func
    };
    _renderHeader() {
        return (
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                    Logout
                </h5>
                <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    id="close-modal"
                >
                    <span aria-hidden="true">&times;</span>
                </button>
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
                    onClick={() => {
                        this.props.logout();
                    }}
                >
                    Logout
                </button>
            </div>
        );
    }

    render() {
        return (
            <div>
                <button
                    type="button"
                    className="btn ml-3 mr-3"
                    data-toggle="modal"
                    data-target={`#logout`}
                >
                    Logout
                </button>

                <div
                    className="modal"
                    id={"logout"}
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="logout"
                    aria-hidden="true"
                >
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            {this._renderHeader()}
                            {this._renderFooter()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
