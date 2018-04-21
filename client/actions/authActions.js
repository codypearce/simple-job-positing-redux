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

export function login(user) {
    return async dispatch => {
        try {
            dispatch(loginRequest());
            // Login
            const res = await fetch("http://localhost:3000/login", {
                body: JSON.stringify(user),
                method: "POST",
                credentials: "include"
            });
            dispatch(loginSuccess(res.body));
        } catch (error) {
            dispatch(loginError(error));
        }
    };
}
