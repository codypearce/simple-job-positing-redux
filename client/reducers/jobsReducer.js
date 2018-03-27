import initialState from "./initialState";

export default function jobsReducer(state = initialState, { type, payload }) {
    switch (type) {
        case "FETCH_JOBS":
            return { ...state, jobs: payload };

        default:
            return state;
    }
}
