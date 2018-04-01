import { combineReducers } from "redux";
import jobsReducer from "./jobsReducer";
import FilteredJobs from "./filteredJobs";

const rootReducer = combineReducers({
    jobs: jobsReducer,
    filteredJobs: FilteredJobs
});

export default rootReducer;
