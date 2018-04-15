import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import LoginModal from "../ui/LoginModal";
import SignupModal from "../ui/SignupModal";

export default class Header extends Component {
    static propTypes = {
        isLoggedIn: PropTypes.bool
    };
    _renderLoggedOut() {
        return (
            <span className="d-flex align-items-center justify-content-end">
                <LoginModal />
                <SignupModal />
            </span>
        );
    }
    _renderLoggedIn() {
        return (
            <Link to="/" className="btn">
                Log Out
            </Link>
        );
    }
    render() {
        const { isLoggedIn } = this.props;
        return (
            <header className="d-flex align-items-center justify-content-end">
                <Link to="/" className="btn">
                    Home
                </Link>
                {isLoggedIn ? this._renderLoggedIn() : this._renderLoggedOut()}
            </header>
        );
    }
}
