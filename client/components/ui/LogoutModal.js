import React, { Component } from "react";
import PropTypes from "prop-types";

import Modal from "./Modal";

export default class LoginModal extends Component {
    static propTypes = {
        logout: PropTypes.func
    };
    render() {
        return (
            <Modal
                title="Logout"
                modalButton="Logout"
                button="Logout"
                modal="LogoutModal"
                primaryFunc={() => this.props.logout(true)}
            />
        );
    }
}
