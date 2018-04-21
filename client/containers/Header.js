import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { login } from "../actions/authActions";

import HeaderUI from "../components/layout/HeaderUI";

class Header extends Component {
    static propTypes = {
        isLoggedIn: PropTypes.bool,
        login: PropTypes.func,
        history: PropTypes.object,
        error: PropTypes.string
    };

    render() {
        const { isLoggedIn, login, history, error } = this.props;
        return (
            <HeaderUI
                isLoggedIn={isLoggedIn}
                login={login}
                history={history}
                error={error}
            />
        );
    }
}

function mapStateToProps(state) {
    return {
        isLoggedIn: state.auth.isLoggedIn,
        error: state.auth.error
    };
}

function mapDispatchToProps(dispatch) {
    return {
        login: isLoggedIn => dispatch(login(isLoggedIn))
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
