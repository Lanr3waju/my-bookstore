import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Book from "../components/Book";

describe("Book component", () => {
    const title = "Book Title";
    const author = "Author Name";
    const id = "123";
    const isDark = false;
    const chapters = 10;
    const chapter = 5;
    const displayModal = vi.fn();

    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("renders book details correctly", () => {
        const book = render(<Provider store={store}><Book title={title} author={author} id={id} isDark={isDark} chapters={chapters} chapter={chapter} displayModal={displayModal} /></Provider>);
        expect(screen.getByText(title)).toBeInTheDocument();
        expect(screen.getByText(author)).toBeInTheDocument();
        expect(screen.getByText("remove book")).toBeInTheDocument();
        expect(screen.getByText("edit book")).toBeInTheDocument();
        book.unmount();
    });

    it("displays edit book menu when edit button is clicked", () => {
        const book = render(<Provider store={store}><Book title={title} author={author} id={id} isDark={isDark} chapters={chapters} chapter={chapter} displayModal={displayModal} /></Provider>);
        fireEvent.click(screen.getByText("edit book"));
        expect(screen.getByText("Change")).toBeInTheDocument();
        book.unmount();
    });

    it("displays remove book confirmation modal when remove button is clicked", () => {
        const book = render(<Provider store={store}><Book title={title} author={author} id={id} isDark={isDark} chapters={chapters} chapter={chapter} displayModal={displayModal} /></Provider>);
        fireEvent.click(book.getByText("remove book"));
        expect(displayModal).toHaveBeenCalled();
        screen.debug();
        book.unmount();
    });
    it("renders book progress component", () => {
        const book = render(<Provider store={store}><Book title={title} author={author} id={id} isDark={isDark} chapters={chapters} chapter={chapter} displayModal={displayModal} /></Provider>);
        expect(book.getByText(/Current chapter/)).toBeInTheDocument();
        expect(book.getByText(/Chapter:/)).toBeInTheDocument();
        screen.debug();
        book.unmount();
    });
});
