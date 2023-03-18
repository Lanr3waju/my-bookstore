import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { vitest } from "vitest";
import AddBook from "../components/AddBook";

vitest.mock("nanoid", () => ({
  nanoid: () => "test-id",
}));

describe("AddBook", () => {
  const mockStore = configureStore([]);
  let store;

  beforeEach(() => {
    store = mockStore({
      books: [],
    });

    render(
      <Provider store={store}>
        <AddBook />
      </Provider>
    );
  });

  it("disables button when input fields are empty", () => {
    const submit = screen.getByRole("button");
    screen.debug();
    expect(submit).toBeDisabled();
  });

  it("disables button when input fields are filled with incorrect values or data type", () => {
    const submit = screen.getByRole("button");

    fireEvent.change(screen.getByTestId("title"), {
      target: { value: "JS For Dummies" },
    });
    fireEvent.change(screen.getByTestId("author"), {
      target: { value: "Abass" },
    });
    fireEvent.change(screen.getByTestId("chapters"), {
      target: { value: "thirty" },
    });
    expect(submit).toBeDisabled();
  });

  it("enables button when input fields are filled with correct values", () => {
    const submit = screen.getByRole("button");

    fireEvent.change(screen.getByTestId("title"), {
      target: { value: "React for dummies" },
    });
    fireEvent.change(screen.getByTestId("author"), {
      target: { value: "Olanrewaju" },
    });
    fireEvent.change(screen.getByTestId("chapters"), { target: { value: 30 } });
    expect(submit).toBeEnabled();
  });

  it("renders Add Book title", () => {
    const titleElement = screen.getByText(/ADD NEW BOOK/i);
    expect(titleElement).toBeInTheDocument();
  });

  it("should update new book title when user types in the input field", () => {
    const titleInput = screen.getByTestId("title");
    fireEvent.change(titleInput, { target: { value: "My new book" } });
    expect(titleInput.value).toBe("My new book");
  });

  it("should update new book author when user types in the input field", () => {
    const authorInput = screen.getByTestId("author");
    fireEvent.change(authorInput, { target: { value: "John Doe" } });
    expect(authorInput.value).toBe("John Doe");
  });

  it("should update new book chapters when user types in the input field", () => {
    const chaptersInput = screen.getByTestId("chapters");
    fireEvent.change(chaptersInput, { target: { value: "10" } });
    expect(chaptersInput.value).toBe("10");
  });
});
