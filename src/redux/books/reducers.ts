/* CONFIGS */
import {
  GET_BOOKS,
  GET_BOOK_DETAILS,
  DROP_DETAILS_MODAL
} from "./constants";

/* MODELS */
import {
  BooksState,
  IAction
} from "src/models";

const initialState: BooksState = {
  fetching: false,
  error: null,
  books: [],
  currentPage: 0,
  count: 0,
  searchPhrase: "",
  selectedBookDetails: null,
  bookDetailsModalVisible: false
};

const books = (state = initialState, action: IAction<BooksState>) => {
  switch (action.type) {
    case GET_BOOKS.SUCCESS:
      return {
        ...state,
        currentPage: action.payload.currentPage,
        books: action.payload.books,
        count: action.payload.count,
        searchPhrase: action.payload.searchPhrase,
      };

    case GET_BOOK_DETAILS.SUCCESS:
      return {
        ...state,
        bookDetailsModalVisible: true,
        selectedBookDetails: action.payload.selectedBookDetails
      };
    case DROP_DETAILS_MODAL:
      return {
        ...state,
        selectedBookDetails: null,
        bookDetailsModalVisible: false
      };

    case GET_BOOKS.FAILURE:
    case GET_BOOK_DETAILS.FAILURE:
      return {
        ...initialState,
        error: true,
      }; 

    default:
      return state;
  }
};

export default books;
