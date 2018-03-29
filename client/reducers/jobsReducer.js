import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function jobsReducer(state = initialState, { type, payload }) {
    switch (type) {
        case types.FETCH_JOBS:
            return { ...state, jobs: payload };

        default:
            return state;
    }
}
