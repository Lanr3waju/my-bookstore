import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import AddBook from "./AddBook";
import Books from "./Books";

function BookList({ isDark }) {
  const booksList = useSelector((state) => state.booksReducer);

  return (
    <>
      <section className={isDark ? "mb-10" : "mb-10"}>
        {booksList.length >= 1 ? (
          <Books isDark={isDark} books={booksList} />
        ) : (
          <h2 className="text-red-600 text-3xl font-bold animate-pulse text-center">
            No Book Yet
          </h2>
        )}
      </section>
      <AddBook />
    </>
  );
}

export default BookList;

BookList.propTypes = {
  isDark: PropTypes.bool.isRequired,
};