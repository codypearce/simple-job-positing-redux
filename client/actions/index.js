import * as types from "./actionTypes";

export function fetchJobRequest(job) {
    return {
        type: types.FETCH_JOB_REQUEST
    };
}

export function fetchJobSuccess(job) {
    return {
        type: types.FETCH_JOB_SUCCESS,
        payload: job
    };
}

export function fetchJobError(job) {
    return {
        type: types.FETCH_JOB_ERROR,
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

export function fetchJobs() {
    return async dispatch => {
        try {
            dispatch(fetchJobsRequest());
            const res = require("../../data/jobs.js");
            dispatch(fetchJobsSucess(res.jobs));
        } catch (error) {
            dispatch(fetchJobsError(error));
        }
    };
}

export function fetchJob(id) {
    return async dispatch => {
        try {
            dispatch(fetchJobRequest());
            const res = require("../../data/jobs.js");
            let job;
            for (let i = 0; i < res.jobs.length; i++) {
                if (res.jobs[i].id == id) {
                    job = res.jobs[i];
                }
            }
            if (job) {
                dispatch(fetchJobSuccess(job));
            } else {
                dispathc(fetchJobError("No Job found D:"));
            }
        } catch (error) {
            dispatch(fetchJobError(error));
        }
    };
}
