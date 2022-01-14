/* COMPONENTS */
import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import rootSaga from "./rootSaga";

/* REDUCERS */
import books from "./books/reducers";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  books
});

export type TRootState = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(rootSaga);

export default store;