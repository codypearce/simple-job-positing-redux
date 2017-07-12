import { combineReducers } from 'redux';
import JobsReducer from './reducerJobs';

const rootReducer = combineReducers({
  jobs: JobsReducer,
});

export default rootReducer;
