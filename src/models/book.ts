

export declare type TBooks = IBookListItem[];

export interface IBookListItem {
  book_author: string[],
  book_publication_city: string,
  book_publication_country:string,
  book_publication_year: number,
  book_pages: number,
  book_title: string,
  id: number
}

export interface IBookDetails {
  id: number,
  book_author: string[],
  book_title: string,
  book_parallel_title: string,
  book_printer: string,
  book_publication_country: string,
  book_publication_city: string,
  book_publication_year: number,
  book_pagination: string
}

export interface BooksState {
  fetching: boolean,
  error: string | null,
  books: IBookListItem[],
  currentPage: number,
  count: number,
  selectedBookDetails: IBookDetails | null,
  searchPhrase: string,
  bookDetailsModalVisible: boolean
}

type TFilterType = "all";

export interface IBooksFilter {
  type: TFilterType,
  values: string[]
}

export interface IBooksResponse {
  books: IBookListItem[],
  count: number
}

export type TBookInfoRow = {
  title: string,
  details: string
}
