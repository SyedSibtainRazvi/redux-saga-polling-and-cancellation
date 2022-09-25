const initialState = {
    quotes: [],
    loading: false,
    error: null,
    polling: false,
};

export const quotePollReducer = (state = initialState, action) => {
    switch (action.type) {
        case "START_POLLING":
            return { ...state, polling: true };
        case "GET_QUOTES_SUCCESS":
            return { ...state, loading: false, quotes: action.quotes };
        case "STOP_POLLING":
            return { ...state, polling: false }
        default:
            return state
    }
};
