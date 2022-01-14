/* COMPONENTS */
import { call, put, select, takeLatest } from "redux-saga/effects";

/* MODELS */
import {
    IActionParams,
    IBooksResponse,
    BooksState,
    IBookDetails
} from "src/models"

/* UTILS */
import { getRequest, postRequest } from "src/utils/request";

/* CONFIGS */
import ENDPOINTS from "src/config/endpoints";
import { BOOKS_PER_PAGE } from "src/config";
import {
    GET_BOOKS,
    GET_BOOK_DETAILS
 } from "./constants";


export function* getBooksNextPage({ payload } : IActionParams<{searchPhrase: string}>) {
    try {     
        const booksState: BooksState = yield select((state) => state.books);

        const {
            currentPage,
            searchPhrase,
            books
        } = booksState;

        let nextPageNum = currentPage + 1;

        if (searchPhrase !== payload.searchPhrase) {
            nextPageNum = 1;
        }

        const requestObj = {
            page: nextPageNum,
            itemsPerPage: BOOKS_PER_PAGE,
            filters: [{type: "all", values: [payload.searchPhrase]}] 
        }

        const response: { data: IBooksResponse} = yield call(postRequest, ENDPOINTS.BOOK_LIST, requestObj)
        yield put({
            type: GET_BOOKS.SUCCESS,
            payload: {
                currentPage: nextPageNum,
                books: nextPageNum === 1 ? response.data.books : [...books, ...response.data.books],
                count: response.data.count,
                searchPhrase: payload.searchPhrase
            },
        });
    } catch (error) {
        yield put({
            type: GET_BOOKS.FAILURE,
        });
    }
}

export function* getBookDetails({ payload } : IActionParams<{bookId: number}>) {
    const { bookId } = payload;

    try {     
        const response: { data: {book: IBookDetails}} = yield getRequest(`${ENDPOINTS.BOOK_DETAILS}${bookId}`);
        yield put({
            type: GET_BOOK_DETAILS.SUCCESS,
            payload: {
                selectedBookDetails: response.data.book
            },
        });
    } catch (error) {
        yield put({
            type: GET_BOOK_DETAILS.FAILURE,
        });
    }
}

export default function* peopleSaga() {
    // yield fork(routeChangeSaga);
    yield takeLatest(GET_BOOKS.REQUEST, getBooksNextPage);
    yield takeLatest(GET_BOOK_DETAILS.REQUEST, getBookDetails);
    // yield takeEvery(LOAD_USER_DETAILS, loadPeopleDetails);
}