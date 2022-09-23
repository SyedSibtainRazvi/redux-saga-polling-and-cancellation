import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import { userPollReducer } from "./reducer.js";
import { userPollSaga } from "./saga.js";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: userPollReducer,
    middleware: () => [sagaMiddleware]
});

sagaMiddleware.run(userPollSaga);