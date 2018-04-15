import React, { Component } from "react";
import PropTypes from "prop-types";

import Modal from "./Modal";

export default class LoginModal extends Component {
    render() {
        return (
            <Modal
                title="Logout"
                modalButton="Logout"
                button="Logout"
                modal="LogoutModal"
            />
        );
    }
}
