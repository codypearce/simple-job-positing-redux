import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import LoginModal from "../ui/LoginModal";
import SignupModal from "../ui/SignupModal";
import LogoutModal from "../ui/LogoutModal";

export default class HeaderUI extends Component {
    static propTypes = {
        isLoggedIn: PropTypes.bool,
        login: PropTypes.func.isRequired,
        logout: PropTypes.func.isRequired,
        signup: PropTypes.func.isRequired,
        history: PropTypes.object,
        error: PropTypes.string
    };
    _renderLoggedOut() {
        return (
            <span className="d-flex align-items-center justify-content-end">
                <LoginModal
                    login={user => this.login(user)}
                    error={this.props.error}
                />
                <SignupModal />
            </span>
        );
    }
    _renderLoggedIn() {
        return <LogoutModal logout={() => this.logout()} />;
    }
    _closeModal() {
        document.body.classList.remove("modal-open");
        let backdrop = document.querySelector(".modal-backdrop");
        document.body.removeChild(backdrop);
    }
    async login(user) {
        const res = await this.props.login(user);
        if (res) {
            await this._closeModal();
            this.props.history.push("/jobs/create");
        }
    }
    async login(user) {
        const res = await this.props.signup(user);
        if (res) {
            await this._closeModal();
            this.props.history.push("/jobs/create");
        }
    }
    async logout() {
        this.props.logout();
        this._closeModal();
        this.props.history.push("/");
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
