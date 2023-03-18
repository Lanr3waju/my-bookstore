import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Header from '../components/Header';

const mockStore = configureMockStore([thunk]);
const initialState = {
    booksReducer: {
        past: [],
        present: [],
        future: []
    }
};
const store = mockStore(initialState);

describe('Header', () => {
    test('renders Header component with correct title', () => {
        render(
            <Provider store={store}>
                <Header isDark={false} handleIsDark={() => { }} />
            </Provider>
        );

        const title = screen.getByText('Lanrewaju BOOKSTORE');
        expect(title).toBeInTheDocument();
    });

    test('renders undo button when past state is not empty', () => {
        initialState.booksReducer.past = [{ id: 1, title: 'Book 1' }];

        render(
            <Provider store={store}>
                <Header isDark={false} handleIsDark={() => { }} />
            </Provider>
        );

        const undoButton = screen.getByText('undo');
        expect(undoButton).toBeInTheDocument();
    });

    test('does not render undo button when past state is empty', () => {
        initialState.booksReducer.past = [];

        render(
            <Provider store={store}>
                <Header isDark={false} handleIsDark={() => { }} />
            </Provider>
        );

        const undoButton = screen.getByText('undo');
        expect(undoButton).toBeDisabled();
    });

    test('renders redo button when future state is not empty', () => {
        initialState.booksReducer.future = [{ id: 2, title: 'Book 2' }];

        render(
            <Provider store={store}>
                <Header isDark={false} handleIsDark={() => { }} />
            </Provider>
        );

        const redoButton = screen.getByText('redo');
        expect(redoButton).toBeEnabled();
    });

    test('does not render redo button when future state is empty', () => {
        initialState.booksReducer.future = [];

        render(
            <Provider store={store}>
                <Header isDark={false} handleIsDark={() => { }} />
            </Provider>
        );

        const redoButton = screen.queryByText('redo');
        expect(redoButton).toBeDisabled();
    });
});
