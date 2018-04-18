import * as types from "./actionTypes";

export function loginRequest() {
    return {
        type: types.LOGIN_REQUEST
    };
}
export function loginSucess(data) {
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
            dispatch(loginSucess(isLoggedIn));
        } catch (error) {
            dispatch(loginError(error));
        }
    };
}
