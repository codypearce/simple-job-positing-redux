import { combineReducers } from "redux";
import jobsReducer from "./jobsReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
    jobs: jobsReducer,
    auth: authReducer
});

export default rootReducer;
