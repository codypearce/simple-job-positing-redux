import * as types from "./actionTypes";

const BASE_URL = "http://localhost:3000";

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

export function logoutRequest() {
    return {
        type: types.LOGOUT_REQUEST
    };
}
export function logoutSuccess(data) {
    return {
        type: types.LOGOUT_SUCCESS,
        payload: data
    };
}
export function logoutError(error) {
    return {
        type: types.LOGOUT_ERROR,
        payload: error
    };
}

export function login(user) {
    return async dispatch => {
        try {
            dispatch(loginRequest());
            // Login
            const res = await fetch(`${BASE_URL}/signin`, {
                body: JSON.stringify(user),
                method: "POST"
            })
                .then(res => res.json())
                .then(data => data);
            localStorage.setItem("token", res.token);
            dispatch(loginSuccess({ user: user }));
            return true;
        } catch (error) {
            dispatch(loginError(error));
        }
    };
}

export function signup(user) {
    return async dispatch => {
        try {
            dispatch(loginRequest());
            // Login
            const res = await fetch(`${BASE_URL}/signin`, {
                body: JSON.stringify(user),
                method: "POST"
            })
                .then(res => res.json())
                .then(data => data);
            localStorage.setItem("token", res.token);
            dispatch(loginSuccess({ user: user }));
            return true;
        } catch (error) {
            dispatch(loginError(error));
        }
    };
}

export function logout() {
    return async dispatch => {
        try {
            dispatch(logoutRequest());

            localStorage.removeItem("token");
            dispatch(logoutSuccess());
            return true;
        } catch (error) {
            dispatch(logoutnError(error));
        }
    };
}
