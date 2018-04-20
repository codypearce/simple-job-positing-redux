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
        history: PropTypes.object
    };

    render() {
        const { isLoggedIn, login, history } = this.props;
        return (
            <HeaderUI isLoggedIn={isLoggedIn} login={login} history={history} />
        );
    }
}

function mapStateToProps(state) {
    return { isLoggedIn: state.auth.isLoggedIn };
}

function mapDispatchToProps(dispatch) {
    return {
        login: isLoggedIn => dispatch(login(isLoggedIn))
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
