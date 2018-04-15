import React, { Component } from "react";
import { Link } from "react-router-dom";

import LoginModal from "../ui/LoginModal";
import SignupModal from "../ui/SignupModal";

export default class Header extends Component {
    render() {
        return (
            <header className="d-flex align-items-center justify-content-end">
                <Link to="/" className="btn">
                    Home
                </Link>
                <LoginModal />
                <SignupModal />
            </header>
        );
    }
}
