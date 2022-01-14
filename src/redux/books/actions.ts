/* CONFIGS */
import {
  GET_BOOKS,
  GET_BOOK_DETAILS,
  DROP_DETAILS_MODAL
} from "./constants";

export const getBooksNextPage = (searchPhrase: string) => ({
  type: GET_BOOKS.REQUEST,
  payload: {
    searchPhrase
  }
});


export const getBookDetails = (bookId: number) => ({
  type: GET_BOOK_DETAILS.REQUEST,
  payload: {
    bookId
  }
});

export const dropDetailsModal = () => ({
  type: DROP_DETAILS_MODAL
});

