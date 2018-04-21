import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function authReducer(state = initialState, { type, payload }) {
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
                isLoading: false
            };
        case types.LOGIN_ERROR:
            return {
                ...state,
                error: payload,
                isLoggedIn: false,
                isLoading: false
            };

        default:
            return state;
    }
}
