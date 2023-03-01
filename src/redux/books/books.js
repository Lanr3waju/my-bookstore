import undoable from "redux-undo";

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const EDIT_BOOK = 'bookStore/books/EDIT_BOOK';

const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});
export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});
export const editBook = (payload) => ({
  type: EDIT_BOOK,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [action.payload, ...state];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);

    case EDIT_BOOK:
      return state.map((book) => {
        if (book.id === action.payload.id) return { ...action.payload };
        return book;
      });

    default:
      return state;
  }
};

const booksReducer = undoable(reducer, { limit: 5 })

export default booksReducer;
