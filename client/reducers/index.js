import { combineReducers } from 'redux';
import JobsReducer from './reducerJobs';
import ActiveJob from './reducerActiveJob';

const rootReducer = combineReducers({
  jobs: JobsReducer,
  activeJob: ActiveJob
});

export default rootReducer;
