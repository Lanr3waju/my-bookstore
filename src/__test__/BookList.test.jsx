import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import BookList from "../components/BookList";

describe("BookList", () => {
  const mockStore = configureStore();
  let initialState = {
    booksReducer: {
      present: [
        {
          id: "1",
          title: "The Great Gatsby",
          author: "F. Scott Fitzgerald",
          chapters: "9",
          chapter: 0,
        },
        {
          id: "2",
          title: "To Kill a Mockingbird",
          author: "Harper Lee",
          chapters: "31",
          chapter: 0,
        },
      ],
    },
  };
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
  });

  it("renders a list of books when books are present in state", () => {
    render(
      <Provider store={store}>
        <BookList isDark={false} />
      </Provider>
    );

    const bookTitles = screen.getAllByTestId("book-title");
    expect(bookTitles).toHaveLength(2);
    expect(bookTitles[0]).toHaveTextContent("The Great Gatsby");
    expect(bookTitles[1]).toHaveTextContent("To Kill a Mockingbird");
  });

  it("renders a message when no books are present in state", () => {
    initialState = {
      booksReducer: {
        present: [],
      },
    };
    store = mockStore(initialState);

    render(
      <Provider store={store}>
        <BookList isDark={false} />
      </Provider>
    );

    const noBooksMessage = screen.getByText(/no book here @ the moment/i);
    expect(noBooksMessage).toBeInTheDocument();
  });
});
