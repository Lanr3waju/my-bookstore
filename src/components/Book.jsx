import PropTypes from "prop-types";
import { useState } from "react";
import EditBook from "./EditBook";

function Book({ title, author, id, isDark, displayModal }) {
  const [bookEditState, setBookEditState] = useState(false);

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
        <section>
          <h2 className="uppercase text-lg font-semibold tracking-wider">
            {title}
          </h2>
          <h3
            className={
              isDark
                ? "capitalize text-gray-300 text-sm"
                : "text-sm capitalize text-gray-600"
            }
          >
            {author}{" "}
          </h3>
        </section>
      )}

      <div className="flex w-1/6 mt-6 justify-between">
        <button
          onClick={displayModal}
          className="bg-red-600 rounded-sm p-2 text-sm text-yellow-50"
          type="button"
        >
          remove
        </button>
        <div className="min-h-full w-[1px] bg-sky-400" />
        <button
          onClick={() => setBookEditState(true)}
          className="bg-orange-800 rounded-sm p-2 text-sm text-yellow-50"
          type="button"
        >
          edit book
        </button>
      </div>
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
};
