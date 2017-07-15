import { combineReducers } from 'redux';
import JobsReducer from './reducerJobs';
import ActiveJob from './reducerActiveJob';
import FilteredJobs from './filteredJobs';

const rootReducer = combineReducers({
  jobs: JobsReducer,
  activeJob: ActiveJob,
  filteredJobs: FilteredJobs
});

export default rootReducer;
