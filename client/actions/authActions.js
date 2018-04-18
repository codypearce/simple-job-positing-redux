import * as types from "./actionTypes";

export function loginRequest() {
    return {
        type: types.LOGIN_REQUEST
    };
}
export function loginSuccess(data) {
    return {
        type: types.LOGIN_SUCCESS,
        payload: data
    };
}
export function loginError(error) {
    return {
        type: types.LOGIN_ERROR,
        payload: error
    };
}

export function login(isLoggedIn) {
    return async dispatch => {
        try {
            dispatch(loginRequest());
            // Login
            dispatch(loginSuccess(isLoggedIn));
        } catch (error) {
            dispatch(loginError(error));
        }
    };
}
