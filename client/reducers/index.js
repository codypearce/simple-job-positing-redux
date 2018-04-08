import { combineReducers } from "redux";
import jobsReducer from "./jobsReducer";

const rootReducer = combineReducers({
    jobs: jobsReducer
});

export default rootReducer;
