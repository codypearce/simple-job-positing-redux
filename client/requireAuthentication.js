import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

export default function(ComposedComponent) {
    class Authentication extends Component {
        static propTypes = {
            isLoggedIn: PropTypes.bool,
            history: PropTypes.object
        };
        componentWillMount() {
            if (!this.props.isLoggedIn) {
                this.props.history.push("/");
            }
        }
        componentWillReceiveProps(nextProps) {
            if (!nextProps.isLoggedIn) {
                this.props.history.push("/");
            }
        }
        render() {
            return <ComposedComponent {...this.props} />;
        }
    }
    function mapStateToProps(state) {
        return { isLoggedIn: state.auth.isLoggedIn };
    }
    return withRouter(connect(mapStateToProps)(Authentication));
}
