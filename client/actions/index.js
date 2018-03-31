import * as types from "./actionTypes";

export function selectJobRequest(job) {
    return {
        type: types.SELECT_JOB_REQUEST
    };
}

export function selectJobSuccess(job) {
    return {
        type: types.SELECT_JOB_SUCCESS,
        payload: job
    };
}

export function selectJobError(job) {
    return {
        type: types.SELECT_JOB_ERROR,
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

export function selectJob(id) {
    return async dispatch => {
        try {
            dispatch(selectJobRequest());
            const res = require("../../data/jobs.js");
            let job;
            for (let i = 0; i < res.jobs.length; i++) {
                if (res.jobs[i].id == id) {
                    job = res.jobs[i];
                }
            }
            dispatch(selectJobSuccess(job));
        } catch (error) {
            dispatch(selectJobError(error));
        }
    };
}
