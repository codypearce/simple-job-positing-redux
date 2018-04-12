import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
    render() {
        return (
            <header className="d-flex justify-content-end">
                <Link to="/login" className="btn">
                    Login
                </Link>
            </header>
        );
    }
}
