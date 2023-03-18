import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { useDispatch } from "react-redux";
import Books from "../components/Books";

vi.mock("react-redux", () => ({
  useDispatch: vi.fn(),
}));

describe("Books", () => {
  const dispatchMock = vi.fn();
  beforeEach(() => {
    useDispatch.mockReturnValue(dispatchMock);
  });

  it("should render all books", () => {
    const books = [
      {
        id: "1",
        title: "Book 1",
        author: "Author 1",
        chapters: "10",
        chapter: "2",
      },
      {
        id: "2",
        title: "Book 2",
        author: "Author 2",
        chapters: "5",
        chapter: "3",
      },
    ];
    render(<Books isDark={false} books={books} />);
    expect(screen.getByText("Book 1")).toBeInTheDocument();
    expect(screen.getByText("Book 2")).toBeInTheDocument();
  });
});
