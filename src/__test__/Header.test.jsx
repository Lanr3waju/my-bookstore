import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import Header from "../components/Header";

const mockStore = configureMockStore([thunk]);
const initialState = {
  booksReducer: {
    past: [],
    present: [],
    future: [],
  },
};
const store = mockStore(initialState);

describe("Header", () => {
  test("renders Header component with correct title", () => {
    render(
      <Provider store={store}>
        <Header isDark={false} handleIsDark={() => { }} />
      </Provider>
    );

    const title = screen.getByText("Lanrewaju BOOKSTORE");
    expect(title).toBeInTheDocument();
  });
});
