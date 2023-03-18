import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import UpdateProgress from "../components/UpdateProgress";

const mockStore = configureMockStore([thunk]);
const store = mockStore({});

describe("UpdateProgress", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <UpdateProgress chapters={10} chapter={5} id="123" />
      </Provider>
    );
  });

  it("renders the form", () => {
    const chapterInput = screen.getByLabelText("Book chapter");
    const submitButton = screen.getByText("update");

    expect(chapterInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it("updates the chapter state when the input value changes", () => {
    const chapterInput = screen.getByLabelText("Book chapter");

    fireEvent.change(chapterInput, { target: { value: 8 } });

    expect(chapterInput.value).toBe("8");
  });
});
