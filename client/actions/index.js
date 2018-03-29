import * as types from "./actionTypes";

export function selectJob(job) {
    return {
        type: "JOB_SELECTED",
        payload: job
    };
}

export function fetchJobsRequest() {
    return {
        type: types.FETCH_JOBS_REQUEST
    };
}
export function fetchJobsSucess(data) {
    return {
        type: types.FETCH_JOBS_SUCCESS,
        payload: data
    };
}
export function fetchJobsError(data) {
    return {
        type: types.FETCH_JOBS_ERROR,
        payload: data
    };
}

export function fetchJobs(opts) {
    return async dispatch => {
        try {
            dispatch(fetchJobsRequest);
            const res = require("../../data/jobs.js");
            dispatch(fetchJobsSucess(res.jobs));
        } catch (error) {
            dispatch(fetchJobsError(error));
        }
    };
}
