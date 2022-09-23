const initialState = {
    users: [],
    loading: false,
    error: null,
    polling: false,
};

export const userPollReducer = (state = initialState, action) => {
    switch (action.type) {
        case "START_POLLING":
            return { ...state, loading: true };
        case "GET_USERS_SUCCESS":
            return { ...state, loading: false, users: action.users };
        case "STOP_POLLING":
            return { ...state, polling: false }
        default:
            return state
    }
};
