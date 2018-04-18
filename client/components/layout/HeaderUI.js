import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import LoginModal from "../ui/LoginModal";
import SignupModal from "../ui/SignupModal";
import LogoutModal from "../ui/LogoutModal";

export default class HeaderUI extends Component {
    static propTypes = {
        isLoggedIn: PropTypes.bool,
        login: PropTypes.func.isRequired
    };
    _renderLoggedOut() {
        return (
            <span className="d-flex align-items-center justify-content-end">
                <LoginModal login={() => this.props.login(true)} />
                <SignupModal />
            </span>
        );
    }
    _renderLoggedIn() {
        return <LogoutModal />;
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