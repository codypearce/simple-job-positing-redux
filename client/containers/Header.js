import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { login } from "../actions/authActions";

import HeaderUI from "../components/layout/HeaderUI";

class Header extends Component {
    static propTypes = {
        isLoggedIn: PropTypes.bool,
        login: PropTypes.func
    };

    render() {
        const { isLoggedIn, login } = this.props;
        return <HeaderUI isLoggedIn={isLoggedIn} login={login} />;
    }
}

function mapStateToProps(state) {
    return (isLoggedIn: state.auth.isLoggedIn);
}

function mapDispatchToProps(dispatch) {
    return {
        login: () => dispatch(login)
    };
}

export default connect()(Header);
