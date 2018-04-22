import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "../reducers/index";
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
import { LOGIN_SUCCESS } from "../actions/actionTypes";
import { checkAuth } from "../actions/authActions";

const store = createStoreWithMiddleware(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const token = localStorage.getItem("token");

store.dispatch(checkAuth());

export default store;
