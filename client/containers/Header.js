import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { login } from "../actions/authActions";

import HeaderUI from "../components/layout/HeaderUI";

class Header extends Component {
    static propTypes = {
        isLoggedIn: PropTypes.bool
    };

    render() {
        const { isLoggedIn } = this.props;
        return <HeaderUI isLoggedIn={isLoggedIn} />;
    }
}

function mapStateToProps(state) {
    return (isLoggedIn: state.auth.isLoggedIn);
}

export default connect()(Header);
