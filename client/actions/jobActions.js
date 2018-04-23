import * as types from "./actionTypes";
const BASE_URL = process.env.BASE_URL;

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
            const res = await fetch(`${BASE_URL}/jobs`)
                .then(res => res.json())
                .then(data => data);
            dispatch(fetchJobsSucess(res));
        } catch (error) {
            dispatch(fetchJobsError(error));
        }
    };
}

function searchString(property, term) {
    return property.toLowerCase().indexOf(term.toLowerCase()) > -1;
}

export function searchJobs(query) {
    return async dispatch => {
        try {
            dispatch(fetchJobsRequest());
            const res = await fetch(`${BASE_URL}/jobs`)
                .then(res => res.json())
                .then(data => data);
            const filteredJobs = res.filter(job => {
                if (
                    searchString(job.title, query) ||
                    searchString(job.company, query) ||
                    searchString(job.salary, query)
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
            const res = await fetch(`${BASE_URL}/jobs/${id}`)
                .then(res => res.json())
                .then(data => data);

            if (res) {
                dispatch(fetchJobSuccess(res));
            } else {
                dispatch(fetchJobError("No Job found D:"));
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
            const res = await fetch(`${BASE_URL}/jobs`, {
                method: "POST",
                body: JSON.stringify(job)
            });

            dispatch(createJobSuccess(job));
            return true;
        } catch (error) {
            console.log(error);
            dispatch(createJobError(error));
        }
    };
}
