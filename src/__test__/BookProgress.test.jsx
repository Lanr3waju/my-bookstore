import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import BookProgress from "../components/BookProgress";

describe("BookProgress", () => {
    const chapters = 10;
    const chapter = 2;
    const id = "abc";

    const mockStore = configureStore([]);
    let store;

    beforeEach(() => {
        store = mockStore({
            books: [],
        });
    });

    it("renders the current chapter correctly", () => {
        const { getByText } = render(
            <BookProgress chapters={chapters} chapter={chapter} id={id} />
        );
        const chapterText = getByText(`Chapter: ${chapter}`);
        expect(chapterText).toBeInTheDocument();
    });

    it("renders the introduction chapter correctly", () => {
        const { getByText } = render(
            <BookProgress chapters={chapters} chapter={0} id={id} />
        );
        const chapterText = getByText("Introduction");
        expect(chapterText).toBeInTheDocument();
    });

    it("renders the update progress button correctly", () => {
        const { getByText } = render(
            <BookProgress chapters={chapters} chapter={chapter} id={id} />
        );
        const updateButton = getByText("update progress");
        expect(updateButton).toBeInTheDocument();
    });

    it("opens the update progress modal when the button is clicked", () => {
        const { getByText, queryByText } = render(
            <Provider store={store}><BookProgress chapters={chapters} chapter={chapter} id={id} /></Provider>
        );
        const updateButton = getByText("update progress");
        fireEvent.click(updateButton);
        const updateProgressButton = queryByText("update");
        expect(updateProgressButton).toBeInTheDocument();
    });
});
