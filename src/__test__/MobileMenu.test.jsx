import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import MobileMenu from "../components/MobileMenu";

describe("MobileMenu", () => {
    const initialState = {
        booksReducer: {
            past: [{ title: "The Catcher in the Rye", author: "J.D. Salinger" }],
            present: [{ title: "1984", author: "George Orwell" }],
            future: [],
        },
    };
    const mockStore = configureStore();
    let store;

    beforeEach(() => {
        store = mockStore(initialState);
    });

    it("renders with undo and redo buttons", () => {
        render(
            <Provider store={store}>
                <MobileMenu isDark={false} handleIsDark={() => { }} />
            </Provider>
        );

        const undoButton = screen.getByText("undo");
        const redoButton = screen.getByText("redo");

        expect(undoButton).toBeInTheDocument();
        expect(redoButton).toBeInTheDocument();
    });

    it("renders ToggleThemeButton", () => {
        render(
            <Provider store={store}>
                <MobileMenu isDark={false} handleIsDark={() => { }} />
            </Provider>
        );

        const toggleThemeButton = screen.getByTestId("toggle theme");

        expect(toggleThemeButton).toBeInTheDocument();
    });
});
