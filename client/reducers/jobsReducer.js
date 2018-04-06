import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function jobsReducer(state = initialState, { type, payload }) {
    switch (type) {
        case types.FETCH_JOBS_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case types.FETCH_JOBS_SUCCESS:
            return {
                ...state,
                jobs: payload,
                isLoading: false
            };
        case types.FETCH_JOBS_ERROR:
            return {
                ...state,
                error: payload,
                isLoading: false
            };
        case types.FETCH_JOB_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case types.FETCH_JOB_SUCCESS:
            return {
                ...state,
                job: payload,
                isLoading: false
            };
        case types.FETCH_JOB_ERROR:
            return {
                ...state,
                error: payload,
                isLoading: false
            };
        case types.CREATE_JOB_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case types.CREATE_JOB_SUCCESS:
            return {
                ...state,
                jobs: [...state.jobs, payload],
                isLoading: false
            };
        case types.CREATE_JOB_ERROR:
            return {
                ...state,
                error: payload,
                isLoading: false
            };

        default:
            return state;
    }
}
