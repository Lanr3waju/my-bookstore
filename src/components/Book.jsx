import PropTypes from "prop-types";
import { useState } from "react";
import EditBook from "./EditBook";
import BookProgress from "./BookProgress";

function Book({ title, author, id, isDark, displayModal, chapters, chapter }) {
  const [bookEditState, setBookEditState] = useState(false);

  return (
    <section
      key={id}
      className={
        isDark
          ? "mb-4 shadow-sm text-white shadow-black mx-auto bg-slate-800 p-4 rounded-sm md:w-4/5"
          : "mb-4 shadow-sm shadow-slate-800 bg-slate-200 p-4 rounded-sm mx-auto md:w-4/5"
      }
      id={id}
    >
      {bookEditState ? (
        <EditBook
          author={author}
          title={title}
          id={id}
          chapters={chapters}
          chapter={chapter}
          closeEditMenu={() => setBookEditState(false)}
        />
      ) : (
        <section className="w-full flex justify-between items-center md:flex-row flex-col">
          <section className="md:w-3/4 w-full mb-4">
            <h2
              data-testid="book-title"
              className="uppercase md:text-4xl text-3xl font-semibold tracking-wider"
            >
              {title}
            </h2>
            <h3
              className={
                isDark
                  ? "capitalize text-gray-300 text-2xl mb-2"
                  : "text-2xl capitalize text-sky-600"
              }
            >
              {author}{" "}
            </h3>
            <div className="flex flex-col md:flex-row md:w-5/12 w-full md:justify-between items-center">
              <button
                onClick={displayModal}
                className="bg-red-600 font-light rounded-sm p-2 md:text-sm text-base text-yellow-50 md:m-2 md:ml-0 hover:bg-red-800 transition-all mt-2 w-full md:w-2/4 md:h-14"
                type="button"
              >
                remove book
              </button>
              <div className="min-h-[50px] hidden md:block w-[2px] bg-sky-400" />
              <button
                onClick={() => setBookEditState(true)}
                className="bg-orange-800 font-light rounded-sm p-2 md:text-sm text-base text-yellow-50 md:m-2 hover:bg-orange-900 transition-all mt-2 w-full md:w-2/4 md:h-14"
                type="button"
              >
                edit book
              </button>
            </div>
            <hr className="md:hidden mt-5" />
          </section>

          <BookProgress id={id} chapters={chapters} chapter={chapter} />
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
  chapter: PropTypes.number.isRequired,
};
