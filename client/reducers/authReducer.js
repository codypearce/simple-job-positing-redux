import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function authReducer(
    state = initialState.auth,
    { type, payload }
) {
    switch (type) {
        case types.LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                user: payload.user,
                error: null,
                isLoading: false
            };
        case types.LOGIN_ERROR:
            return {
                ...state,
                error: payload,
                isLoggedIn: false,
                isLoading: false
            };

        case types.LOGOUT_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case types.LOGOUT_SUCCESS:
            return {
                ...state,
                isLoggedIn: false,
                user: "",
                error: null,
                isLoading: false
            };
        case types.LOGOUT_ERROR:
            return {
                ...state,
                error: payload,
                isLoading: false
            };

        default:
            return state;
    }
}
