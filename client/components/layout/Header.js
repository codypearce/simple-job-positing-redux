import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
    render() {
        return (
            <header className="d-flex align-items-center justify-content-end">
                <Link to="/" className="btn">
                    Home
                </Link>
                <Link to="/login" className="btn ml-3 mr-3">
                    Login
                </Link>
            </header>
        );
    }
}
