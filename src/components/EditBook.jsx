import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch } from "react-redux";
// import your Action Creators
import { editBook } from "../redux/books/books";

function EditBook({
  title: currentTitle,
  author: currentAuthor,
  id: bookId,
  closeEditMenu,
}) {
  const dispatch = useDispatch();

  const [currentBook, setCurrentBook] = useState({
    title: currentTitle,
    author: currentAuthor,
    id: bookId,
  });

  function handleCurrentBook({ target: { value, name } }) {
    setCurrentBook((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  const submitBook = (e) => {
    e.preventDefault();
    dispatch(editBook(currentBook));
    closeEditMenu();
  };

  const { title, author } = currentBook;
  return (
    <form onSubmit={submitBook}>
      <input
        className="w-1/4 rounded-sm p-2 mr-3 shadow-sm shadow-black font-medium text-black"
        aria-label="Book Title"
        placeholder="Enter book title"
        type="text"
        id="title"
        value={title}
        onChange={handleCurrentBook}
        name="title"
      />

      <input
        className="w-1/4 rounded-sm p-2 mr-3 shadow-sm shadow-black font-medium text-black"
        aria-label="Book Author"
        placeholder="Enter book author"
        type="text"
        id="author"
        value={author}
        onChange={handleCurrentBook}
        name="author"
      />

      <button
        disabled={title === "" || author === ""}
        className="bg-slate-900 p-2 text-white disabled:opacity-10"
        type="submit"
      >
        Change
      </button>
    </form>
  );
}

export default EditBook;

EditBook.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  closeEditMenu: PropTypes.func.isRequired,
};
