import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import { quotePollReducer } from "./reducer.js";
import { quotePollSaga } from "./saga.js";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: quotePollReducer,
    middleware: () => [sagaMiddleware]
});

sagaMiddleware.run(quotePollSaga);