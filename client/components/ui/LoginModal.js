import React, { Component } from "react";
import PropTypes from "prop-types";

import Modal from "./Modal";

export default class LoginModal extends Component {
    render() {
        return <Modal title="Login" modalButton="Login" button="Login" />;
    }
}
