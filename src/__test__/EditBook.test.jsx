import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { vi } from "vitest";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import EditBook from "../components/EditBook";

const mockStore = configureStore([thunk]);

describe("EditBook component", () => {
    let store;
    let closeEditMenu;
    const bookId = "1";
    const title = "Test Title";
    const author = "Test Author";
    const chapter = 1;
    const chapters = 10;

    beforeEach(() => {
        store = mockStore({
            booksReducer: {
                present: [
                    {
                        id: bookId,
                        title,
                        author,
                        chapter,
                        chapters,
                    },
                ],
            },
        });

        closeEditMenu = vi.fn();
    });

    test("renders with book data", () => {
        const { getByLabelText, getByText } = render(
            <Provider store={store}>
                <EditBook
                    id={bookId}
                    title={title}
                    author={author}
                    chapter={chapter}
                    chapters={chapters}
                    closeEditMenu={closeEditMenu}
                />
            </Provider>
        );

        expect(getByLabelText("Book Title")).toHaveValue(title);
        expect(getByLabelText("Book Author")).toHaveValue(author);
        expect(getByText("Change")).toBeInTheDocument();
    });

    test("updates book data on input change", () => {
        const { getByLabelText } = render(
            <Provider store={store}>
                <EditBook
                    id={bookId}
                    title={title}
                    author={author}
                    chapter={chapter}
                    chapters={chapters}
                    closeEditMenu={closeEditMenu}
                />
            </Provider>
        );

        const newTitle = "New Test Title";
        fireEvent.change(getByLabelText("Book Title"), {
            target: { value: newTitle },
        });

        const newAuthor = "New Test Author";
        fireEvent.change(getByLabelText("Book Author"), {
            target: { value: newAuthor },
        });

        expect(getByLabelText("Book Title")).toHaveValue(newTitle);
        expect(getByLabelText("Book Author")).toHaveValue(newAuthor);
    });

    test("dispatches editBook action on form submit", () => {
        const { getByLabelText, getByText } = render(
            <Provider store={store}>
                <EditBook
                    id={bookId}
                    title={title}
                    author={author}
                    chapter={chapter}
                    chapters={chapters}
                    closeEditMenu={closeEditMenu}
                />
            </Provider>
        );

        const newTitle = "New Test Title";
        fireEvent.change(getByLabelText("Book Title"), {
            target: { value: newTitle },
        });

        fireEvent.submit(getByText("Change"));

        expect(store.getActions()).toEqual([
            {
                type: "bookStore/books/EDIT_BOOK",
                payload: {
                    id: bookId,
                    title: newTitle,
                    author,
                    chapter,
                    chapters,
                },
            },
        ]);
        expect(closeEditMenu).toHaveBeenCalled();
    });
});
