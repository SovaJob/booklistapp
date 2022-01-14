/* COMPONENTS */
import {all, spawn} from 'redux-saga/effects';

/* CUSTOM COMPONENTS */
import booksSaga from './books/sagas';

export default function* rootSaga() {
    const sagas = [booksSaga];

    yield all(sagas.map(s => spawn(s)));
}