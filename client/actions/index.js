export function selectJob(job) {
    return {
        type: "JOB_SELECTED",
        payload: job
    };
}

export function fetchJobsAction(data) {
    return {
        type: "FETCH_JOBS",
        payload: data
    };
}

export function fetchJobs(opts) {
    return async dispatch => {
        try {
            const res = require("../../data/jobs.js");
            dispatch(fetchJobsAction(res.jobs));
        } catch (error) {
            console.log(error);
        }
    };
}
