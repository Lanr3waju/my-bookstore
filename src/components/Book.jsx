import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useState } from "react";
import EditBook from "./EditBook";
import BookProgress from "./BookProgress";

function Book({ title, author, id, isDark, displayModal, chapters }) {
  const [bookEditState, setBookEditState] = useState(false);
  const booksList = useSelector((state) => state.booksReducer.present);
  const { chapter } = booksList.find((book) => book.id === id);

  return (
    <section
      key={id}
      className={
        isDark
          ? "mb-4 shadow-sm text-white shadow-black mx-auto bg-slate-800 p-4 rounded-sm w-4/5"
          : "mb-4 shadow-sm shadow-slate-800 bg-slate-200 p-4 rounded-sm mx-auto w-4/5"
      }
      id={id}
    >
      {bookEditState ? (
        <EditBook
          author={author}
          title={title}
          id={id}
          closeEditMenu={() => setBookEditState(false)}
        />
      ) : (
        <section className="w-full flex justify-between items-center">
          <section className="w-3/4">
            <h2 className="uppercase md:text-4xl text-3xl font-semibold tracking-wider">
              {title}
            </h2>
            <h3
              className={
                isDark
                  ? "capitalize text-gray-300 text-2xl"
                  : "text-2xl capitalize text-sky-600"
              }
            >
              {author}{" "}
            </h3>
            <div className="flex flex-col md:flex-row md:w-2/6 w-full md:justify-between items-center">
              <button
                onClick={displayModal}
                className="bg-red-600 rounded-sm p-2 md:text-sm text-lg text-yellow-50 mr-2"
                type="button"
              >
                remove
              </button>
              <div className="min-h-[50px] hidden md:block w-[2px] bg-sky-400" />
              <button
                onClick={() => setBookEditState(true)}
                className="bg-orange-800 rounded-sm p-2 md:text-sm text-lg text-yellow-50 m-2"
                type="button"
              >
                edit book
              </button>
            </div>
          </section>

          <BookProgress id={id} chapters={chapters} chapter={+chapter} />
        </section>
      )}
    </section>
  );
}

export default Book;

Book.defaultProps = {
  id: "",
  title: "",
  author: "",
};

Book.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  isDark: PropTypes.bool.isRequired,
  displayModal: PropTypes.func.isRequired,
  chapters: PropTypes.number.isRequired,
};
