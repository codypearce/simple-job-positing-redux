import React, { Component } from "react";
import PropTypes from "prop-types";

import Modal from "./Modal";

export default class SignupModal extends Component {
    static propTypes = {
        signup: PropTypes.func,
        error: PropTypes.string
    };
    render() {
        return (
            <Modal
                title="Signup"
                modalButton="Signup"
                button="Signup"
                modal="signupModal"
                primaryFunc={user => this.props.signup(user)}
                error={this.props.error}
            />
        );
    }
}
