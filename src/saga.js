import { call, put, take, fork, cancel, cancelled, delay } from "redux-saga/effects";
import { fetchApiData } from "./fetchData.js"

//Worker Function
//This creates a loop in which a request is made with a delay after the API call returns.
function* userStatusCheckLoop() {
    while (true)
        try {
            const users = yield call(fetchApiData)
            yield put({ type: "GET_USERS_SUCCESS", users: users });
            console.log(users.content);
            yield delay(3000)
            //adds a delay of 3 seconds

        } finally {
            if (yield cancelled()) {
            }
        }
}

export function* userPollSaga() {
    while (yield take("START_POLLING")) {

        // starts the task in the background
        const userPollTask = yield fork(userStatusCheckLoop)
        // Fork: makes a non-blocking call to a function that produces a promise.

        // wait for the user stop action (button click in our case)
        yield take("STOP_POLLING")

        // user clicked stop. cancel the background task
        // this will cause the forked userPollTask task to jump into its finally block
        yield cancel(userPollTask)
        // Cancel: cancels the saga execution.
    }
}
