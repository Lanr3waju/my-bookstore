import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch } from "react-redux";
import EditBook from "./EditBook";
import { removeBook } from "../redux/books/books";

function Book({ title, author, id }) {
  const [bookEditState, setBookEditState] = useState(false);
  const dispatch = useDispatch();

  return (
    <section className="mb-4" id={id}>
      <h2>{title}</h2>
      <h3>{author} </h3>
      <button
        onClick={() => dispatch(removeBook(id))}
        className="bg-slate-700 mx-3 rounded-lg text-yellow-50"
        type="button"
      >
        Remove
      </button>
      <button
        onClick={() => setBookEditState(true)}
        className="bg-orange-700 mx-3 rounded-lg text-yellow-50"
        type="button"
      >
        Edit book
      </button>
      {bookEditState && (
        <EditBook
          author={author}
          title={title}
          id={id}
          closeEditMenu={() => setBookEditState(false)}
        />
      )}
      <hr />
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
};
