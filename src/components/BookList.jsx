import { useSelector } from "react-redux";
import AddBook from "./AddBook";
import Books from "./Books";

function BookList() {
  const booksList = useSelector((state) => state.booksReducer);

  return (
    <>
      {booksList.length >= 1 ? (
        <Books books={booksList} />
      ) : (
        <h2 className="text-red-600 text-xl font-bold animate-pulse">
          No Book Yet
        </h2>
      )}
      <AddBook />
    </>
  );
}

export default BookList;
