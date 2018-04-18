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
    console.log("wt");
    return async dispatch => {
        console.log("teerest");
        try {
            dispatch(loginRequest());
            // Login
            console.log("test");
            dispatch(loginSuccess(isLoggedIn));
        } catch (error) {
            dispatch(loginError(error));
        }
    };
}
