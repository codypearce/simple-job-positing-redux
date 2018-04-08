import * as types from "./actionTypes";

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
export function fetchJobsError(error) {
    return {
        type: types.FETCH_JOBS_ERROR,
        payload: error
    };
}

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

export function fetchJobError(error) {
    return {
        type: types.FETCH_JOB_ERROR,
        payload: error
    };
}

export function createJobRequest(job) {
    return {
        type: types.CREATE_JOB_REQUEST
    };
}

export function createJobSuccess(job) {
    return {
        type: types.CREATE_JOB_SUCCESS,
        payload: job
    };
}

export function createJobError(error) {
    return {
        type: types.CREATE_JOB_ERROR,
        payload: error
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

export function searchJobs(query) {
    return async dispatch => {
        try {
            dispatch(fetchJobsRequest());
            const res = require("../../data/jobs.js");
            const filteredJobs = res.jobs.filter(job => {
                if (
                    job.title.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    job.company.toLowerCase().indexOf(query.toLowerCase()) >
                        -1 ||
                    job.salary.toLowerCase().indexOf(query.toLowerCase()) > -1
                ) {
                    return true;
                }
            });
            dispatch(fetchJobsSucess(filteredJobs));
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

export function createJob(job) {
    return async dispatch => {
        try {
            dispatch(createJobRequest());
            const res = require("../../data/jobs.js");
            const jobs = res.jobs;
            let newJob = {
                ...job,
                id: jobs.length + 1,
                show: true
            };
            res.jobs.push(newJob);
            dispatch(createJobSuccess(newJob));
        } catch (error) {
            dispatch(createJobsError(error));
        }
    };
}
