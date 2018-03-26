import { combineReducers } from "redux";
import jobsReducer from "./jobsReducer";
import ActiveJob from "./reducerActiveJob";
import FilteredJobs from "./filteredJobs";

const rootReducer = combineReducers({
    jobs: jobsReducer,
    activeJob: ActiveJob,
    filteredJobs: FilteredJobs
});

export default rootReducer;
