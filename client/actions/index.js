export function selectJob(job) {
  return {
    type: 'JOB_SELECTED',
    payload: job
  }
}